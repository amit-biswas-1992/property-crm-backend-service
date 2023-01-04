import { EntityRepository, Repository } from "typeorm";
import { CreateClientSaleAgentDto } from "./dto/create-client_sale_agent.dto";
import { UpdateClientSaleAgentDto } from "./dto/update-client_sale_agent.dto";
import { ClientSaleAgent } from "./entities/client_sale_agent.entity";

@EntityRepository(ClientSaleAgent)
export class ClientSaleAgentRepository extends Repository<ClientSaleAgent>{

    async findAllClientSaleAgent(): Promise<ClientSaleAgent[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}