import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsEmail({}, {message: "Invalid Email format"})
    @IsNotEmpty({message: "email is missing"})
    email: string;

    @IsString({message: "password should be string"})
    @IsNotEmpty({message: "password is missing"})
    @MinLength(8, {message: "Password shoould be at least 8 characters long"})
    password: string;
}
