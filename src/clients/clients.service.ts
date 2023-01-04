import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientsRepository } from './clients.repository';
import { Clients } from './entities/clients.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(ClientsRepository) private readonly repository: ClientsRepository
    ) { }

    async getAllClients(): Promise<Clients[]> {
        const result = await this.repository.findAllClients();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
