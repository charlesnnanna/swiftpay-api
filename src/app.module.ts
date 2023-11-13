import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


const uri = "mongodb+srv://charlesuthulor:<password>@testdb.hcqo9cp.mongodb.net/?retryWrites=true&w=majority";
@Module({
  imports: [
    MongooseModule.forRoot(uri),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
