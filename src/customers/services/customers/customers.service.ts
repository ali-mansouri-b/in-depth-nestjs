import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'abc@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      email: 'def@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      email: 'ghi@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    const user = this.users.find((item) => item.id === id);
    return user;
  }
}
