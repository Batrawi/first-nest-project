import { Controller, Delete, Get, Patch, Post, Param } from '@nestjs/common';
@Controller()
export class UserController {
  // 1# any rout is a method , every method coming after http method decorator👇
  // 2# we can make our api dynamic by suing request params
  @Get('user')
  getAllUsers(): string[] {
    return ['Mohammed', 'Anas', 'Mahmoud', 'Ahmed'];
  }

  @Get('user:userId')
  findOneUser(@Param('userId') userId: number): number {
    return userId;
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
