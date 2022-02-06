import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { compare } from 'bcrypt';
import { HelperService } from 'src/helper/helper.service';
import { User } from 'src/users/schemas/users.schema';
import { UsersService } from 'src/users/users.service';
import { AccountResponse } from './dto/account-response.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountService {
  private readonly logger = new Logger(AccountService.name);

  constructor(
    private readonly usersService: UsersService,
    private readonly helperService: HelperService,
  ) {}

  async get(user: User): Promise<AccountResponse> {
    const account = this.helperService.mapUserToAccountResponse(user);
    this.logger.log('Account obtained successfully');
    return account;
  }

  async update(user: User, updateAccount: UpdateAccountDto): Promise<void> {
    await this.usersService.update(user.email, updateAccount);
    this.logger.log('Account updated successfully');
  }

  async updatePassword(
    user: User,
    currentPassword: string,
    newPassword: string,
  ): Promise<void> {
    const passwordMatch = await compare(currentPassword, user.password);
    if (!passwordMatch) {
      this.logger.error(
        'Error trying to update password: passwords do not match',
      );
      throw new BadRequestException('Invalid password');
    }
    await this.usersService.updatePassword(user.email, newPassword);
    this.logger.log('Password updated successfully');
  }
}
