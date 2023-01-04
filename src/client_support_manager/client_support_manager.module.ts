import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { ClientSupportManagerController } from './client_support_manager.controller';
import { ClientSupportManagerRepository } from './client_support_manager.repository';
import { ClientSupportManagerService } from './client_support_manager.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientSupportManagerRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [ClientSupportManagerController],
  providers: [ClientSupportManagerService, JwtHelper]
})
export class ClientSupportManagerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
