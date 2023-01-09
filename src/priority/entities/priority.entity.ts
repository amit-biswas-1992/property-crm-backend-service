import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Priority extends BaseEntity{
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
    priority: string;


    
    @OneToMany(type => Clients, clients => clients.priority)
    clients: Clients[];
    

}