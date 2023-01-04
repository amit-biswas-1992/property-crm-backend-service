import { Controller} from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BookingStatus')
@Controller({
    path: "booking_status",
    version: "1"
})
export class BookingStatusController {
    constructor(private booking_statusService: BookingStatusService) { }

}
