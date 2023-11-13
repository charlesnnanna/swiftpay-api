import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString({message: "username should be a string"})
    @IsNotEmpty({message: "username is missing"})
    @MinLength(3, {message: "username shoould be at least 3 characters long"})
    username: string;

    @IsEmail({}, {message: "Invalid Email format"})
    @IsNotEmpty({message: "email is missing"})
    email: string;

    @IsString({message: "password should be string"})
    @IsNotEmpty({message: "password is missing"})
    @MinLength(8, {message: "username shoould be at least 8 characters long"})
    password: string;
}
