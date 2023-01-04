import { Controller} from '@nestjs/common';
import { SourceOfEnquiryService } from './source_of_enquiry.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('SourceOfEnquiry')
@Controller({
    path: "sourceOfEnquiry",
    version: "1"
})
export class SourceOfEnquiryController {
    constructor(private sourceOfEnquiryService: SourceOfEnquiryService) { }

}
