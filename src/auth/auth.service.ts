import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignInDto } from './dto/sign-in-dto';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {
    constructor (private usersService: UsersService) {}

    async signIn(signInDto: SignInDto) {
        const user = await this.usersService.findByEnail(signInDto.email)
        const isMatch = await bcrypt.compare(signInDto.password, user[0].password)
        if (isMatch){
            return 'logged in'
        } else{
            return 'Unauthorized'
        }
    
    }
}
