import { ApiProperty } from "@nestjs/swagger";
import { BookingStatus } from "src/booking_status/entities/booking_status.entity";
import { ClientTags } from "src/client_tags/entities/client_tags.entity";
import { BaseEntity } from "src/Config/base.entity";
import { Country } from "src/country/entities/country.entity";
import { Priority } from "src/priority/entities/priority.entity";
import { SourceOfEnquiry } from "src/source_of_enquiry/entities/source_of_enquiry.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clients extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    first_name: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    second_name: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    email: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    password: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    email_secondary_1: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    email_secondary_2: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    telephone: string;

    
    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    mobile: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    address: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    origin_country: string;


    @ApiProperty()
    @Column({
        type : 'bigint'
    })
    country_id: number;
    @ManyToOne(type => Country, country => country.id)
    @JoinColumn({ name: 'country_id'})
    country: Country;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    city: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    area: string;
    
    
    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    source_of_enquiry: number;
    @ManyToOne(type => SourceOfEnquiry, sourceOfEnquiry => sourceOfEnquiry.id)
    @JoinColumn({ name: 'source_of_enquiry'})
    sourceOfEnquiry: SourceOfEnquiry;



    @ApiProperty()
    @Column({
        type : 'bigint',
    })
    referred_to_id: number;
    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'referred_to_id'})
    referred_to_user: Users;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    sale_agent: number;
    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'sale_agent'})
    sale_agent_user: Users;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    next_call_date: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    booking_date: string;


    @ApiProperty()
    @Column({
        type: "bigint"
    })
    priority_id: number;
    @ManyToOne(type => Priority, priority => priority.id)
    @JoinColumn({ name: 'priority_id'})
    priority: Priority;


    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    booking_status_id: number;
    @ManyToOne(type => BookingStatus, bookingStatus => bookingStatus.id)
    @JoinColumn({ name: 'booking_status_id'})
    bookingStatus: BookingStatus;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    client_category: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    verified: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    client_status: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    maximum_budget: string;


    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    finance_required: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    newsletter_subscribed: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    specific_property_ref: string;


    @ApiProperty()
    @Column({
        type : 'bigint'
    })
    client_tags_id: number;
    @ManyToOne(type => ClientTags, clientTags => clientTags.id)
    @JoinColumn({ name: 'client_tags_id'})
    clientTags: ClientTags;

}