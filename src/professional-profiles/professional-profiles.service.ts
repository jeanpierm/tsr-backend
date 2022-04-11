import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityStatus } from 'src/shared/enums/status.enum';
import { User } from 'src/users/schemas/users.schema';
import { TechnologiesService } from '../technologies/technologies.service';
import { ProfessionalProfileGenerator } from './ppg-algorithm/ppg';
import { GetProfessionalProfilesQuery } from './dto/get-professional-profiles-query.dto';
import { TechType } from './enums/tech-type.enum';
import {
  ProfessionalProfile,
  ProfessionalProfileDocument,
} from './schemas/professional-profile.schema';

@Injectable()
export class ProfessionalProfilesService {
  private readonly logger = new Logger(ProfessionalProfilesService.name);

  constructor(
    @InjectModel(ProfessionalProfile.name)
    private readonly proProfileModel: Model<ProfessionalProfileDocument>,
    private readonly generateProfessionalProfile: ProfessionalProfileGenerator,
    private readonly technologiesService: TechnologiesService,
  ) {}

  /**
   * Genera un perfil profesional utilizando un algoritmo que hace Web Scraping.
   * El perfil generado se persiste en la base de datos.
   * @param user - current user
   * @param jobTitle
   * @param location
   */
  async generate(user: User, jobTitle: string, location: string): Promise<ProfessionalProfile> {
    const generatedProfile = await this.generateProfessionalProfile.executeAlgorithm(
      user,
      jobTitle,
      location,
    );
    this.logger.log(`Professional profile generated by user ${user.userId}`);
    const createdProfile = await this.proProfileModel.create(generatedProfile);
    this.logger.debug(`Professional profile generated`, createdProfile);
    return createdProfile.populate('owner');
  }

  async getSortedByCreatedDateAsc(
    user: User,
    getQuery?: GetProfessionalProfilesQuery,
  ): Promise<ProfessionalProfile[]> {
    const findQuery: FilterQuery<ProfessionalProfileDocument> = {
      owner: user,
      status: EntityStatus.Active,
    };

    if (getQuery) {
      const { initDate, endDate, jobTitle, location } = getQuery;
      if (initDate || endDate) findQuery.createdAt = {};
      if (initDate) findQuery.createdAt['$gte'] = initDate;
      if (endDate) findQuery.createdAt['$lt'] = endDate;
      if (jobTitle)
        findQuery.jobTitle = {
          $regex: new RegExp(jobTitle.trim().replace('.', '')),
          $options: 'i',
        };
      if (location)
        findQuery.location = {
          $regex: new RegExp(location.trim().replace('.', '')),
          $options: 'i',
        };
    }

    const profiles = await this.proProfileModel
      .find(findQuery)
      .sort({ createdAt: -1 })
      .populate('owner')
      .lean();
    this.logger.log(`Professional profiles obtained by user ${user.userId}`);
    return profiles;
  }

  async getRandom(): Promise<ProfessionalProfile> {
    const profilesCount = await this.proProfileModel.count().exec();
    const random = Math.floor(Math.random() * profilesCount);
    const profile = await this.proProfileModel.findOne().skip(random).exec();
    this.logger.log(`Random professional profile obtained`);
    return profile;
  }

  async remove(user: User, profileId: string): Promise<void> {
    await this.proProfileModel.findOneAndUpdate(
      { _id: profileId },
      { status: EntityStatus.Inactive },
    );
    this.logger.log(`Professional profiles deleted by user ${user.userId}`);
  }

  async getTechnologyCount(profiles: ProfessionalProfile[], type: TechType) {
    const technologies = await this.technologiesService.findByType(type);
    const dictionary: Record<string, number> = {};

    for (const { name } of technologies) {
      switch (type) {
        case TechType.Language:
          dictionary[name] = profiles.filter((profile) => profile.languages.includes(name)).length;
          break;
        case TechType.Database:
          dictionary[name] = profiles.filter((profile) => profile.databases.includes(name)).length;
          break;
        case TechType.Framework:
          dictionary[name] = profiles.filter((profile) => profile.frameworks.includes(name)).length;
          break;
        case TechType.Library:
          dictionary[name] = profiles.filter((profile) => profile.libraries.includes(name)).length;
          break;
        case TechType.Paradigm:
          dictionary[name] = profiles.filter((profile) => profile.paradigms.includes(name)).length;
          break;
        case TechType.Pattern:
          dictionary[name] = profiles.filter((profile) => profile.patterns.includes(name)).length;
          break;
        case TechType.Tool:
          dictionary[name] = profiles.filter((profile) => profile.tools.includes(name)).length;
          break;
      }
    }

    return dictionary;
  }

  async getEnglishCount(user: User) {
    const profiles = await this.getSortedByCreatedDateAsc(user);
    return {
      requiereEnglish: profiles.filter((profile) => profile.requireEnglish === true).length,
      noRequiereEnglish: profiles.filter((profile) => profile.requireEnglish === false).length,
    };
  }
}
