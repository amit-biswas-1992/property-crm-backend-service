import { EntityRepository, Repository } from "typeorm";
import { CreateSourceOfEnquiryDto } from "./dto/create-source_of_enquiry.dto";
import { UpdateSourceOfEnquiryDto } from "./dto/update-source_of_enquiry.dto";
import { SourceOfEnquiry } from "./entities/source_of_enquiry.entity";

@EntityRepository(SourceOfEnquiry)
export class SourceOfEnquiryRepository extends Repository<SourceOfEnquiry>{

    async findAllSourceOfEnquiry(): Promise<SourceOfEnquiry[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}