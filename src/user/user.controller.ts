import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
@Controller()
export class UserController {
  // any rout is a method , every method coming after http method decorator👇
  @Get('user')
  getAllUsers(): string[] {
    return ['Mohammed', 'Anas', 'Mahmoud', 'Ahmed'];
  }
  @Post('user')
  createUser(): string {
    return 'user created successfully';
  }

  @Patch('user')
  updateUser(): string {
    return 'user info updated';
  }

  @Delete('user')
  removeUser(): string {
    return 'usr deleted';
  }
}
