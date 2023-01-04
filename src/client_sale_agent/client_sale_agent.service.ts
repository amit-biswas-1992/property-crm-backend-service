import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientSaleAgentRepository } from './client_sale_agent.repository';
import { ClientSaleAgent } from './entities/client_sale_agent.entity';

@Injectable()
export class ClientSaleAgentService {
    constructor(
        @InjectRepository(ClientSaleAgentRepository) private readonly repository: ClientSaleAgentRepository
    ) { }

    async getAllClientSaleAgent(): Promise<ClientSaleAgent[]> {
        const result = await this.repository.findAllClientSaleAgent();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
