import { Controller} from '@nestjs/common';
import { ClientTagsService } from './client_tags.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('ClientTags')
@Controller({
    path: "clientTags",
    version: "1"
})
export class ClientTagsController {
    constructor(private clientTagsService: ClientTagsService) { }

}
