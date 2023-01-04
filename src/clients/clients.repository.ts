import { EntityRepository, Repository } from "typeorm";
import { CreateClientsDto } from "./dto/create-clients.dto";
import { UpdateClientsDto } from "./dto/update-clients.dto";
import { Clients } from "./entities/clients.entity";

@EntityRepository(Clients)
export class ClientsRepository extends Repository<Clients>{

    async findAllClients(): Promise<Clients[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}