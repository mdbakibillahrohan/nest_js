import { Module } from '@nestjs/common';
import { LoginService } from 'src/services/authentication/login/login.service';
import { LoginController } from './login/login.controller';

@Module({
  imports: [],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AuthenticationModule {}
