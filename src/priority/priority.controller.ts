import { Controller} from '@nestjs/common';
import { PriorityService } from './priority.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Priority')
@Controller({
    path: "priority",
    version: "1"
})
export class PriorityController {
    constructor(private priorityService: PriorityService) { }

}
