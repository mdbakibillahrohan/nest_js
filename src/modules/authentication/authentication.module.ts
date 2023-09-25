import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/config/database/database.module';
import { photoProviders } from 'src/providers/photo.providers';
import { LoginService } from 'src/services/authentication/login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [LoginController],
  providers: [...photoProviders, LoginService],
})
export class AuthenticationModule {}
