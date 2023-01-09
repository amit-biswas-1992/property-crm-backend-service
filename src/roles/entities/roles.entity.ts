import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Users } from "src/users/entities/users.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Roles extends BaseEntity{
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
    role: string;


    
    @OneToMany(type => Users, users => users.roles)
    users: Users[];
    
}