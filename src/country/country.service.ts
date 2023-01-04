import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryRepository) private readonly repository: CountryRepository
    ) { }

    async getAllCountry(): Promise<Country[]> {
        const result = await this.repository.findAllCountry();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
