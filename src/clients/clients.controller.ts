import { Controller} from '@nestjs/common';
import { ClientsService } from './clients.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Clients')
@Controller({
    path: "clients",
    version: "1"
})
export class ClientsController {
    constructor(private clientsService: ClientsService) { }

}
