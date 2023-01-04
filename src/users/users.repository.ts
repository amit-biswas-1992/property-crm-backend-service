import { EntityRepository, Repository } from "typeorm";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";
import { Users } from "./entities/users.entity";

@EntityRepository(Users)
export class UsersRepository extends Repository<Users>{

    async findAllUsers(): Promise<Users[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}