import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PriorityRepository } from './priority.repository';
import { Priority } from './entities/priority.entity';

@Injectable()
export class PriorityService {
    constructor(
        @InjectRepository(PriorityRepository) private readonly repository: PriorityRepository
    ) { }

    async getAllPriority(): Promise<Priority[]> {
        const result = await this.repository.findAllPriority();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
