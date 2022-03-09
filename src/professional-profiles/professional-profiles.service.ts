import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { EntityStatus } from 'src/shared/enums/status.enum';
import { User } from 'src/users/schemas/users.schema';
import { GenerateProfessionalProfile } from './algorithm/generate-professional-profile';
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
    private readonly generateProfessionalProfile: GenerateProfessionalProfile,
  ) {}

  /**
   * Genera un perfil profesional utilizando un algoritmo que hace Web Scraping.
   * El perfil generado se persiste en la base de datos.
   * @param user - current user
   * @param jobTitle
   * @param location
   */
  async generate(
    user: User,
    jobTitle: string,
    location: string,
  ): Promise<ProfessionalProfile> {
    const generatedProfile =
      await this.generateProfessionalProfile.executeAlgorithm(
        user,
        jobTitle,
        location,
      );
    this.logger.log(`Professional profile generated by user ${user._id}`);
    const createdProfile = await this.create(user, generatedProfile);
    this.logger.debug(`Professional profile generated`, createdProfile);
    return createdProfile.populate('owner');
  }

  private create(user: User, proProfile: ProfessionalProfile) {
    this.logger.log(`Professional profile created by user ${user._id}`);
    return this.proProfileModel.create(proProfile);
  }

  async getSortedByCreatedDateAsc(
    user: User,
    initDate?: Date,
    endDate?: Date,
    jobTitle?: string,
    location?: string,
  ): Promise<ProfessionalProfile[]> {
    const findQuery: FilterQuery<ProfessionalProfileDocument> = {
      owner: user,
      status: EntityStatus.Active,
    };
    if (initDate || endDate) findQuery.createdAt = {};
    if (initDate) findQuery.createdAt['$gte'] = initDate;
    if (endDate) findQuery.createdAt['$lt'] = endDate;
    if (jobTitle)
      findQuery.jobTitle = { $regex: new RegExp(jobTitle), $options: 'i' };
    if (location)
      findQuery.location = { $regex: new RegExp(location), $options: 'i' };

    const profiles = await this.proProfileModel
      .find(findQuery)
      .sort({ createdAt: -1 })
      .populate('owner')
      .exec();
    this.logger.log(`Professional profiles obtained by user ${user._id}`);
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
    this.logger.log(`Professional profiles deleted by user ${user._id}`);
  }

  async getTechnologyCount(identifier: Record<string, string[]>, prop: string) {
    const profiles = await this.proProfileModel.find().lean();
    const count: Record<string, number> = {};
    for (const key of Object.keys(identifier)) {
      count[key] = this.getCountOfTechnology(profiles, prop, key);
    }
    return count;
  }

  async getEnglishCount() {
    const profiles = await this.proProfileModel.find().lean();
    return {
      requiereEnglish: profiles.filter(
        ProfessionalProfilesService.requiereEnglish,
      ).length,
      noRequiereEnglish: profiles.filter(
        ProfessionalProfilesService.noRequiereEnglish,
      ).length,
    };
  }

  private getCountOfTechnology(
    profiles: ProfessionalProfile[],
    prop: string,
    technologyName: string,
  ) {
    return profiles.filter((profile) => profile[prop].includes(technologyName))
      .length;
  }

  private static requiereEnglish(profile: ProfessionalProfile) {
    return profile.requireEnglish === true;
  }

  private static noRequiereEnglish(profile: ProfessionalProfile) {
    return profile.requireEnglish === false;
  }
}
