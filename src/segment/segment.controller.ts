import { Controller} from '@nestjs/common';
import { SegmentService } from './segment.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Segment')
@Controller({
    path: "segment",
    version: "1"
})
export class SegmentController {
    constructor(private segmentService: SegmentService) { }

}
