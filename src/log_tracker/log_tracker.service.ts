import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogTrackerRepository } from './log_tracker.repository';
import { LogTracker } from './entities/log_tracker.entity';

@Injectable()
export class LogTrackerService {
    constructor(
        @InjectRepository(LogTrackerRepository) private readonly repository: LogTrackerRepository
    ) { }

    async getAllLogTracker(): Promise<LogTracker[]> {
        const result = await this.repository.findAllLogTracker();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
