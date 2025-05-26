import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { AdressDto } from './adress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsNumberString()
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => AdressDto)
  address: AdressDto;
}
