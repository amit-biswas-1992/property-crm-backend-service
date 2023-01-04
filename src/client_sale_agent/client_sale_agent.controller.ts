import { Controller} from '@nestjs/common';
import { ClientSaleAgentService } from './client_sale_agent.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ClientSaleAgent')
@Controller({
    path: "clientSaleAgent",
    version: "1"
})
export class ClientSaleAgentController {
    constructor(private clientSaleAgentService: ClientSaleAgentService) { }

}
