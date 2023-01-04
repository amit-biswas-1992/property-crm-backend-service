import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { LogTrackerController } from './log_tracker.controller';
import { LogTrackerRepository } from './log_tracker.repository';
import { LogTrackerService } from './log_tracker.service';

@Module({
  imports: [TypeOrmModule.forFeature([LogTrackerRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [LogTrackerController],
  providers: [LogTrackerService, JwtHelper]
})
export class LogTrackerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
