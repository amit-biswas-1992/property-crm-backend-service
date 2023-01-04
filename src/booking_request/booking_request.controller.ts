import { Controller} from '@nestjs/common';
import { BookingRequestService } from './booking_request.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('BookingRequest')
@Controller({
    path: "bookingRequest",
    version: "1"
})
export class BookingRequestController {
    constructor(private bookingRequestService: BookingRequestService) { }

}
