import { ApiProperty } from "@nestjs/swagger";
import { Clients } from "src/clients/entities/clients.entity";
import { BaseEntity } from "src/Config/base.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ClientSaleAgent extends BaseEntity{
    @ApiProperty()
    @PrimaryGeneratedColumn({
        type: 'bigint'
    })
    id: number;


    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    sale_agent_id: number;
    @ManyToOne(type => Users, users => users.id)
    @JoinColumn({ name: 'sale_agent_id'})
    user : Users;

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
        type: 'bigint'
    })
    deleted: number;

}