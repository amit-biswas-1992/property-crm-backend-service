import { EntityRepository, Repository } from "typeorm";
import { CreateSnoozeDto } from "./dto/create-snooze.dto";
import { UpdateSnoozeDto } from "./dto/update-snooze.dto";
import { Snooze } from "./entities/snooze.entity";

@EntityRepository(Snooze)
export class SnoozeRepository extends Repository<Snooze>{

    async findAllSnooze(): Promise<Snooze[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}