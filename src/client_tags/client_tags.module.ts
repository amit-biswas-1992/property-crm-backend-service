import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { ClientTagsController } from './client_tags.controller';
import { ClientTagsRepository } from './client_tags.repository';
import { ClientTagsService } from './client_tags.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientTagsRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [ClientTagsController],
  providers: [ClientTagsService, JwtHelper]
})
export class ClientTagsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
