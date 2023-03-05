import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2)
  fullName: string;

  @IsEmail(undefined, { message: 'It is not email' })
  email: string;

  @Length(8, undefined, { message: 'Password length must be greater than 8' })
  password?: string;
}
