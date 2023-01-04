import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { BookingRequestRepository } from './booking_request.repository';
import { BookingRequestService } from './booking_request.service';
import { BookingRequestController } from './booking_request.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookingRequestRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [BookingRequestController],
  providers: [BookingRequestService, JwtHelper]
})
export class BookingRequestModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
