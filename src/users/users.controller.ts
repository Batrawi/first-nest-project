import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';
@Controller('users')
export class UsersController {
  // 1# any rout is a method , every method coming after http method decorator👇
  // 2# we can make our api dynamic by suing request params
  // we can delete 'user' inside get and post decorator and just pass it inside the controller.
  // the resources in the nest apps should be like users, cats, products,...etc , not cat, user,product...etc.
  @Get()
  getAllUsers(): string[] {
    return ['Mohammed', 'Anas', 'Mahmoud', 'Ahmed'];
  }

  // here👇 we tell nest this rout is dynamic , that means theres params here.

  @Get(':userId')
  // to get access to the specific param from request params, we defined and destructuring the param that we want,
  findOneUser(@Param('userId') userId: number): number {
    return userId;
  }
  @Post()
  createUser(@Body() data: any): any {
    return `user created successfully:\n ${JSON.stringify(data)}`;
  }

  @Patch(':userName')
  updateUser(
    @Param('userName') userName: string,
    @Body() inputUserData: any,
  ): string {
    return `${userName} info updated \n ${JSON.stringify(inputUserData)}`;
  }

  @Delete(':userid')
  removeUser(@Param('userid') userId: number): string {
    return `The user who has this id deleted ${userId}`;
  }
}
