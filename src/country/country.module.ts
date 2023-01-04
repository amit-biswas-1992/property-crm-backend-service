import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { CountryController } from './country.controller';
import { CountryRepository } from './country.repository';
import { CountryService } from './country.service';

@Module({
  imports: [TypeOrmModule.forFeature([CountryRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [CountryController],
  providers: [CountryService, JwtHelper]
})
export class CountryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
