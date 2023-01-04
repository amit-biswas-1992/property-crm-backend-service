import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
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
        nullable: false,
        default: " "
    })
    raised_by: string;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    source_of_inquiry: string;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    deleted: number;
    

}