import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column , CreateDateColumn, UpdateDateColumn} from 'typeorm';

export class BaseEntity {
@CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
created_at: Date;

@UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
updated_at: Date;

@ApiProperty()
@Column({
    type: 'int',
    default : 0
})
deleted: number;

}