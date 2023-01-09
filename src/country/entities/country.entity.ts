import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country extends BaseEntity{
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
    country_origin: string;


    @OneToMany(type => Users, users => users.country)
    users: Users[];
    
    @OneToMany(type => Clients, clients => clients.country)
    client: Clients[];

}