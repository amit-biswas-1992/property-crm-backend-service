import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientsRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [ClientsController],
  providers: [ClientsService, JwtHelper]
})
export class ClientsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
