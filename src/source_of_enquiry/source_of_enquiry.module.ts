import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import JwtConfigService from 'src/jwt/jwt-config.service';
import JwtHelper from 'src/jwt/jwt.helper';
import { SourceOfEnquiryController } from './source_of_enquiry.controller';
import { SourceOfEnquiryRepository } from './source_of_enquiry.repository';
import { SourceOfEnquiryService } from './source_of_enquiry.service';

@Module({
  imports: [TypeOrmModule.forFeature([SourceOfEnquiryRepository]),
  JwtModule.registerAsync({
    useClass: JwtConfigService
  })
  ],
  controllers: [SourceOfEnquiryController],
  providers: [SourceOfEnquiryService, JwtHelper]
})
export class SourceOfEnquiryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
