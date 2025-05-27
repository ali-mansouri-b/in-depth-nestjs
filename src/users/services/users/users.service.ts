import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'abcd',
      password: 'abcd',
    },
    {
      username: 'efgh',
      password: 'efgh',
    },
    {
      username: 'ijkl',
      password: 'ijkl',
    },
    {
      username: 'mnop',
      password: 'mnop',
    },
  ];

  getUsers() {
    return this.users;
  }

  getUserByUsername(username: string) {
    return this.users.find((item) => item.username === username);
  }
}
