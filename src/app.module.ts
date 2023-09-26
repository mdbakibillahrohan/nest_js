import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Photo } from './entities/photos.entity';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '202.22.203.92',
      username: 'sa',
      password: 'w23eW@#E',
      database: 'rohan_test',
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
      options: { trustServerCertificate: true, encrypt: false },
    }),
    AuthenticationModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService, Photo],
})
export class AppModule {}
