import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
@Module({
  // imports property that used to import metadata (Module) ass array👇
  imports: [UsersModule],
})
export class AppModule {}
