import { EntityRepository, Repository } from "typeorm";
import { CreatePriorityDto } from "./dto/create-priority.dto";
import { UpdatePriorityDto } from "./dto/update-priority.dto";
import { Priority } from "./entities/priority.entity";

@EntityRepository(Priority)
export class PriorityRepository extends Repository<Priority>{

    async findAllPriority(): Promise<Priority[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}