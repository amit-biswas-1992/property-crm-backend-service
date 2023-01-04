import { EntityRepository, Repository } from "typeorm";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { Country } from "./entities/country.entity";

@EntityRepository(Country)
export class CountryRepository extends Repository<Country>{

    async findAllCountry(): Promise<Country[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}