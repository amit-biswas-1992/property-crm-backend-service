import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { ClientSaleAgentController } from './client_sale_agent.controller';
import { ClientSaleAgentRepository } from './client_sale_agent.repository';
import { ClientSaleAgentService } from './client_sale_agent.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientSaleAgentRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [ClientSaleAgentController],
  providers: [ClientSaleAgentService, JwtHelper]
})
export class ClientSaleAgentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
