import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  // any rout is a method , every method coming after http method decorator👇
  @Get('user')
  getAllUsers(): string[] {
    return ['Mohammed', 'Anas', 'Mahmoud', 'Ahmed'];
  }
}
