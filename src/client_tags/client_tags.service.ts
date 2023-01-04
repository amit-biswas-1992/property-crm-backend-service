import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientTagsRepository } from './client_tags.repository';
import { ClientTags } from './entities/client_tags.entity';

@Injectable()
export class ClientTagsService {
    constructor(
        @InjectRepository(ClientTagsRepository) private readonly repository: ClientTagsRepository
    ) { }

    async getAllClientTags(): Promise<ClientTags[]> {
        const result = await this.repository.findAllClientTags();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
