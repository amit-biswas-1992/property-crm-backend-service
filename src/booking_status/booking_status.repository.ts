import { EntityRepository, Repository } from "typeorm";
import { CreateBookingStatusDto } from "./dto/create-booking_status.dto";
import { UpdateBookingStatusDto } from "./dto/update-booking_status.dto";
import { BookingStatus } from "./entities/booking_status.entity";

@EntityRepository(BookingStatus)
export class BookingStatusRepository extends Repository<BookingStatus>{

    async findAllBookingStatus(): Promise<BookingStatus[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}