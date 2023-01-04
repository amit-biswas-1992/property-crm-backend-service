import { Controller} from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Roles')
@Controller({
    path: "roles",
    version: "1"
})
export class RolesController {
    constructor(private rolesService: RolesService) { }

}
