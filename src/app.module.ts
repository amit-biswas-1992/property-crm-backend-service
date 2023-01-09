import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Budget } from './budget/entities/budget.entity';
import { BudgetModule } from './budget/budget.module';
import { BookingRequest } from './booking_request/entities/booking_request.entity';
import { BookingRequestModule } from './booking_request/booking_request.module';
import { BookingStatusModule } from './booking_status/booking_status.module';
import { ClientSaleAgentModule } from './client_sale_agent/client_sale_agent.module';
import { ClientSupportManagerModule } from './client_support_manager/client_support_manager.module';
import { ClientTagsModule } from './client_tags/client_tags.module';
import { ClientsModule } from './clients/clients.module';
import { CountryModule } from './country/country.module';
import { LogTrackerModule } from './log_tracker/log_tracker.module';
import { PriorityModule } from './priority/priority.module';
import { RolesModule } from './roles/roles.module';
import { SegmentModule } from './segment/segment.module';
import { SnoozeModule } from './snooze/snooze.module';
import { SourceOfEnquiryModule } from './source_of_enquiry/source_of_enquiry.module';
import { UsersModule } from './users/users.module';
import { BookingStatus } from './booking_status/entities/booking_status.entity';
import { ClientSaleAgent } from './client_sale_agent/entities/client_sale_agent.entity';
import { ClientSupportManager } from './client_support_manager/entities/client_support_manager.entity';
import { ClientTags } from './client_tags/entities/client_tags.entity';
import { Clients } from './clients/entities/clients.entity';
import { Country } from './country/entities/country.entity';
import { LogTracker } from './log_tracker/entities/log_tracker.entity';
import { Priority } from './priority/entities/priority.entity';
import { Roles } from './roles/entities/roles.entity';
import { Segment } from './segment/entities/segment.entity';
import { Snooze } from './snooze/entities/snooze.entity';
import { SourceOfEnquiry } from './source_of_enquiry/entities/source_of_enquiry.entity';
import { Users } from './users/entities/users.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'property_crm_new',
      entities: [Budget, BookingRequest, BookingStatus, ClientSaleAgent, ClientSupportManager, ClientTags, Clients, Country, LogTracker, Priority, Roles, Segment, Snooze, SourceOfEnquiry, Users],
      synchronize: true,
    }),
    BudgetModule, BookingRequestModule, BookingStatusModule, ClientSaleAgentModule, ClientSupportManagerModule, ClientTagsModule, ClientsModule, CountryModule, LogTrackerModule, PriorityModule, RolesModule, SegmentModule, SnoozeModule, SourceOfEnquiryModule, UsersModule
  ],
})
export class AppModule {
  constructor(private connection: Connection) {}
 }
