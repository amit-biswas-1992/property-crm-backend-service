import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { SourceOfEnquiry } from "src/source_of_enquiry/entities/source_of_enquiry.entity";
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
        nullable: false,
        default: " "
    })
    country: string;
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
    enquiry: SourceOfEnquiry;



    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    referred_to: string;
    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    sale_agent: string;
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
        nullable: false,
        default: " "
    })
    priority: string;
    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    booking_status: string;
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
        nullable: false,
        default: " "
    })
    client_tags: string;
 
    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    deleted: number;

}