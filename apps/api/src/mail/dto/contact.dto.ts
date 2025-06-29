import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()  @MaxLength(60) name!: string;
  @IsEmail()     @MaxLength(120) email!: string;
  @IsNotEmpty()  @MaxLength(120) subject!: string;
  @IsNotEmpty()  @MaxLength(2000) message!: string;
}
