import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  // we can import/inject controller by suing controllers property, now the user controller will initialized when app run
  controllers: [UserController],
})
export class UserModule {}
