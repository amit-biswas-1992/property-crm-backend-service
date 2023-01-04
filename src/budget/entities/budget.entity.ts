import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Budget extends BaseEntity{
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
    budget: string;

    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    active: number;

}