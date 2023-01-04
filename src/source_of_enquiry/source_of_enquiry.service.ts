import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SourceOfEnquiryRepository } from './source_of_enquiry.repository';
import { SourceOfEnquiry } from './entities/source_of_enquiry.entity';

@Injectable()
export class SourceOfEnquiryService {
    constructor(
        @InjectRepository(SourceOfEnquiryRepository) private readonly repository: SourceOfEnquiryRepository
    ) { }

    async getAllSourceOfEnquiry(): Promise<SourceOfEnquiry[]> {
        const result = await this.repository.findAllSourceOfEnquiry();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
