import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { BudgetController } from './budget.controller';
import { BudgetRepository } from './budget.repository';
import { BudgetService } from './budget.service';

@Module({
  imports: [TypeOrmModule.forFeature([BudgetRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [BudgetController],
  providers: [BudgetService, JwtHelper]
})
export class BudgetModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
