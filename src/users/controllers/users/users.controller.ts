import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types/user';

@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ type: SerializedUser })
@Controller('users')
export class UsersController {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':username')
  getUserByUsername(@Param('username') username: string) {
    const user = this.usersService.getUserByUsername(username);
    if (user) return user;
    else throw new HttpException('user not found', HttpStatus.NOT_FOUND);
  }
}
