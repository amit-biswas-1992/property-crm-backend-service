import { EntityRepository, Repository } from "typeorm";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import { Budget } from "./entities/budget.entity";

@EntityRepository(Budget)
export class BudgetRepository extends Repository<Budget>{

    async findAllBudget(): Promise<Budget[]> {
        try {
            return await this.find();
        } catch (error) {
            return error;
        }
    }

}