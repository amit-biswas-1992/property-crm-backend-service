import { EntityRepository, Repository } from "typeorm";
import { CreateSegmentDto } from "./dto/create-segment.dto";
import { UpdateSegmentDto } from "./dto/update-segment.dto";
import { Segment } from "./entities/segment.entity";

@EntityRepository(Segment)
export class SegmentRepository extends Repository<Segment>{

    async findAllSegment(): Promise<Segment[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}