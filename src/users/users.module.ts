import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  // we can import/inject controller by suing controllers property, now the user controller will initialized when app run
  controllers: [UsersController],
})
export class UsersModule {}
