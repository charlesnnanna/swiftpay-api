import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  get(): string {
    return 'This is the Home route of an API';
  }

}
