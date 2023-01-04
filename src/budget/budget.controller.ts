import { Controller} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Budget')
@Controller({
    path: "budget",
    version: "1"
})
export class BudgetController {
    constructor(private budgetService: BudgetService) { }

}
