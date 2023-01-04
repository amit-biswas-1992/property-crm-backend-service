import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SnoozeRepository } from './snooze.repository';
import { Snooze } from './entities/snooze.entity';

@Injectable()
export class SnoozeService {
    constructor(
        @InjectRepository(SnoozeRepository) private readonly repository: SnoozeRepository
    ) { }

    async getAllSnooze(): Promise<Snooze[]> {
        const result = await this.repository.findAllSnooze();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
