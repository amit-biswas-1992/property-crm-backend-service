import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersRepository) private readonly repository: UsersRepository
    ) { }

    async getAllUsers(): Promise<Users[]> {
        const result = await this.repository.findAllUsers();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
