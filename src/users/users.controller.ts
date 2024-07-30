import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Body,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateDTO } from './DTOs/create.dto';
import { UpdateDTO } from './DTOs/update.dto';
import { UsersEntity } from './users.entity';
@Controller('users')
export class UsersController {
  private users: UsersEntity[] = [];
  // 1# any rout is a method , every method coming after http method decorator👇
  // 2# we can make our api dynamic by suing request params
  // we can delete 'user' inside get and post decorator and just pass it inside the controller.
  // the resources in the nest apps should be like users, cats, products,...etc , not cat, user,product...etc.
  @Get()
  get(): UsersEntity[] {
    return this.users;
  }

  // here👇 we tell nest this rout is dynamic , that means theres params here.

  @Get(':userId')
  // to get access to the specific param from request params, we defined and destructuring the param that we want,
  getOne(@Param('userId') userId: number): number {
    return userId;
  }
  @Post()
  create(@Body() data: CreateDTO): CreateDTO {
    /*     const newUser = new UsersEntity();
    newUser.id = 'uuid1';
    newUser.name = data.name;
    newUser.email = data.email;
    newUser.age = data.age;
    newUser.gender = data.gender; */

    const newUser: UsersEntity = {
      id: uuidv4(),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Patch(':id')
  update(@Param('id') userId: string, @Body() inputData: UpdateDTO): UpdateDTO {
    // find the user`s index that I want to update
    const userIndex = this.users.findIndex((user) => user.id === userId);
    this.users[userIndex] = { ...this.users[userIndex], ...inputData };
    return this.users[userIndex];
  }

  @Delete(':userid')
  remove(@Param('userid') userId: number): string {
    return `The user who has this id deleted ${userId}`;
  }
}
