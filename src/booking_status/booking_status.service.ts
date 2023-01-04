import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingStatusRepository } from './booking_status.repository';
import { BookingStatus } from './entities/booking_status.entity';

@Injectable()
export class BookingStatusService {
    constructor(
        @InjectRepository(BookingStatusRepository) private readonly repository: BookingStatusRepository
    ) { }

    async getAllBookingStatus(): Promise<BookingStatus[]> {
        const result = await this.repository.findAllBookingStatus();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
