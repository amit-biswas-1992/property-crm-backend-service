import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { BookingStatusController } from './booking_status.controller';
import { BookingStatusRepository } from './booking_status.repository';
import { BookingStatusService } from './booking_status.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookingStatusRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [BookingStatusController],
  providers: [BookingStatusService, JwtHelper]
})
export class BookingStatusModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
