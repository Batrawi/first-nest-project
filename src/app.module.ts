import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
@Module({
  // imports property that used to import metadata (Module) ass array👇
  imports: [UserModule],
})
export class AppModule {}
