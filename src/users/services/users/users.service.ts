import { Injectable } from '@nestjs/common';
import { User } from 'src/users/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      username: 'abcd',
      password: 'abcd',
    },
    {
      id: 2,
      username: 'efgh',
      password: 'efgh',
    },
    {
      id: 3,
      username: 'ijkl',
      password: 'ijkl',
    },
    {
      id: 4,
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

  getUserById(id: number) {
    return this.users.find((item) => item.id === id);
  }
}
