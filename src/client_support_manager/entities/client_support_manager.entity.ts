import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientSupportManager extends BaseEntity{
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
    clientSupportManager: string;
    

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    support_manager_id: number;
    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'support_manager_id'})
    user : Users;


    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    client_id: number;
    @ManyToOne(type => Clients, client => client.id)
    @JoinColumn({ name: 'client_id'})
    client : Clients;


}