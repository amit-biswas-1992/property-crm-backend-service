import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
import { SourceOfEnquiry } from "src/source_of_enquiry/entities/source_of_enquiry.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookingRequest extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    client_id: number;
    @ManyToOne(type => Clients, client => client.id)
    @JoinColumn({ name: 'client_id'})
    client : Clients;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    client_name: string;

    @ApiProperty()
    @Column({
        type : "bigint"
    })
    raised_by_id: number;
    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'raised_by_id'})
    users : Users;

    @ApiProperty()
    @Column({
        type : 'bigint'
    })
    source_of_inquiry_id: string;    
    @ManyToOne(type => SourceOfEnquiry, sourceOfEnquiry => sourceOfEnquiry.id)
    @JoinColumn({ name: 'source_of_inquiry_id'})
    sourceOfEnquiry : SourceOfEnquiry;



}