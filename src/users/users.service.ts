import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto)
    const query = await this.userModel.find({email: createdUser.email}).exec()
    if (query.length){
      console.log(query)
      return `User already exists`;
    }

    const saltOrRounds = 10;
    createdUser['password'] = await bcrypt.hash(createdUser.password, saltOrRounds);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findById(id: string) {
    return this.userModel.find({id: id}).exec();
  }

  async findByEnail(email: string){
    return this.userModel.find({email: email}).exec();
  }
  

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
