import { EntityRepository, Repository } from "typeorm";
import { CreateRolesDto } from "./dto/create-roles.dto";
import { UpdateRolesDto } from "./dto/update-roles.dto";
import { Roles } from "./entities/roles.entity";

@EntityRepository(Roles)
export class RolesRepository extends Repository<Roles>{

    async findAllRoles(): Promise<Roles[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}