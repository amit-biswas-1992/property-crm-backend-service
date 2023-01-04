import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRequestRepository } from './booking_request.repository';
import { BookingRequest } from './entities/booking_request.entity';

@Injectable()
export class BookingRequestService {
    constructor(
        @InjectRepository(BookingRequestRepository) private readonly repository: BookingRequestRepository
    ) { }

    async getAllBookingRequest(): Promise<BookingRequest[]> {
        const result = await this.repository.findAllBookingRequest();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
