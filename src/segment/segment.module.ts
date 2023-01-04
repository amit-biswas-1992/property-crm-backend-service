import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { SegmentController } from './segment.controller';
import { SegmentRepository } from './segment.repository';
import { SegmentService } from './segment.service';

@Module({
  imports: [TypeOrmModule.forFeature([SegmentRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [SegmentController],
  providers: [SegmentService, JwtHelper]
})
export class SegmentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
