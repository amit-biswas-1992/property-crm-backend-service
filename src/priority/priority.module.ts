import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { PriorityController } from './priority.controller';
import { PriorityRepository } from './priority.repository';
import { PriorityService } from './priority.service';

@Module({
  imports: [TypeOrmModule.forFeature([PriorityRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [PriorityController],
  providers: [PriorityService, JwtHelper]
})
export class PriorityModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
