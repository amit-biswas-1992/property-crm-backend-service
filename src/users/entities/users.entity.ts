import { ApiProperty } from "@nestjs/swagger";
import { BaseEntity } from "src/Config/base.entity";
import { Country } from "src/country/entities/country.entity";
import { Roles } from "src/roles/entities/roles.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users extends BaseEntity{
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
    username: string;

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
    pass_hash: string;


    
    @ApiProperty()
    @Column({
        type: 'bigint'
    })
    role: number;
    @ManyToOne(type => Roles, roles => roles.id)
    @JoinColumn({ name: 'role'})
    roles : Roles;

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
        type : 'bigint'
    })
    country_id: number;
    @ManyToOne(type => Country, country => country.id)
    @JoinColumn({ name: 'country'})
    country: Country;

    @ApiProperty()
    @Column({
        nullable: false,
        default: " "
    })
    city: string;


}