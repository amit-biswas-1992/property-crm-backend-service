import { EntityRepository, Repository } from "typeorm";
import { CreateBookingRequestDto } from "./dto/create-booking_request.dto";
import { UpdateBookingRequestDto } from "./dto/update-booking_request.dto";
import { BookingRequest } from "./entities/booking_request.entity";

@EntityRepository(BookingRequest)
export class BookingRequestRepository extends Repository<BookingRequest>{

    async findAllBookingRequest(): Promise<BookingRequest[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}