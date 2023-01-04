import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesRepository } from './roles.repository';
import { Roles } from './entities/roles.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RolesRepository) private readonly repository: RolesRepository
    ) { }

    async getAllRoles(): Promise<Roles[]> {
        const result = await this.repository.findAllRoles();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
