import { EntityRepository, Repository } from "typeorm";
import { CreateClientSupportManagerDto } from "./dto/create-client_support_manager.dto";
import { UpdateClientSupportManagerDto } from "./dto/update-client_support_manager.dto";
import { ClientSupportManager } from "./entities/client_support_manager.entity";

@EntityRepository(ClientSupportManager)
export class ClientSupportManagerRepository extends Repository<ClientSupportManager>{

    async findAllClientSupportManager(): Promise<ClientSupportManager[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}