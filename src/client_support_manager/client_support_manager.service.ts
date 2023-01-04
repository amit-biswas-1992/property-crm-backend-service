import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientSupportManagerRepository } from './client_support_manager.repository';
import { ClientSupportManager } from './entities/client_support_manager.entity';

@Injectable()
export class ClientSupportManagerService {
    constructor(
        @InjectRepository(ClientSupportManagerRepository) private readonly repository: ClientSupportManagerRepository
    ) { }

    async getAllClientSupportManager(): Promise<ClientSupportManager[]> {
        const result = await this.repository.findAllClientSupportManager();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
