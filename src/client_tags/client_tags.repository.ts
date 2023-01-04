import { EntityRepository, Repository } from "typeorm";
import { CreateClientTagsDto } from "./dto/create-client_tags.dto";
import { UpdateClientTagsDto } from "./dto/update-client_tags.dto";
import { ClientTags } from "./entities/client_tags.entity";

@EntityRepository(ClientTags)
export class ClientTagsRepository extends Repository<ClientTags>{

    async findAllClientTags(): Promise<ClientTags[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}