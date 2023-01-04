import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SegmentRepository } from './segment.repository';
import { Segment } from './entities/segment.entity';

@Injectable()
export class SegmentService {
    constructor(
        @InjectRepository(SegmentRepository) private readonly repository: SegmentRepository
    ) { }

    async getAllSegment(): Promise<Segment[]> {
        const result = await this.repository.findAllSegment();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
