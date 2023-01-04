import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { SnoozeController } from './snooze.controller';
import { SnoozeRepository } from './snooze.repository';
import { SnoozeService } from './snooze.service';

@Module({
  imports: [TypeOrmModule.forFeature([SnoozeRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [SnoozeController],
  providers: [SnoozeService, JwtHelper]
})
export class SnoozeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
