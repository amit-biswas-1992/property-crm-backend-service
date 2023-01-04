import { Controller} from '@nestjs/common';
import { ClientSupportManagerService } from './client_support_manager.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ClientSupportManager')
@Controller({
    path: "clientSupportManager",
    version: "1"
})
export class ClientSupportManagerController {
    constructor(private clientSupportManagerService: ClientSupportManagerService) { }

}
