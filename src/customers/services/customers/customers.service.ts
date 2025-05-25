import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      email: 'abc@gmail.com',
      name: 'abc',
    },
    {
      id: 2,
      email: 'def@gmail.com',
      name: 'def',
    },
    {
      id: 3,
      email: 'ghi@gmail.com',
      name: 'ghi',
    },
  ];

  findCustomerById(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    return customer;
  }

  createCustomer(createCustomerDto: CreateCustomerDto) {
    this.customers.push(createCustomerDto);
  }

  getAllCustomers() {
    return this.customers;
  }
}
