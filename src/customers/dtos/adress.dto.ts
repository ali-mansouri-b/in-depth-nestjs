import { IsNotEmpty } from 'class-validator';

export class AdressDto {
  @IsNotEmpty()
  city: string;

  state: string;
}
