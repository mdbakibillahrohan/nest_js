import { Controller, Post } from '@nestjs/common';
import { LoginService } from 'src/services/authentication/login/login.service';

@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}
  @Post('/')
  async login() {
    return '';
  }
}
