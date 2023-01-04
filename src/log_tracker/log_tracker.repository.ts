import { EntityRepository, Repository } from "typeorm";
import { CreateLogTrackerDto } from "./dto/create-log_tracker.dto";
import { UpdateLogTrackerDto } from "./dto/update-log_tracker.dto";
import { LogTracker } from "./entities/log_tracker.entity";

@EntityRepository(LogTracker)
export class LogTrackerRepository extends Repository<LogTracker>{

    async findAllLogTracker(): Promise<LogTracker[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}