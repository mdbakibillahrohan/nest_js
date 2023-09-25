import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SettingsModule } from './modules/settings/settings.module';
import { LoginService } from './services/authentication/login/login.service';
import { RegisterService } from './services/authentication/register/register.service';

@Module({
  imports: [AuthenticationModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService, LoginService, RegisterService],
})
export class AppModule {}
