import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BudgetRepository } from './budget.repository';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {
    constructor(
        @InjectRepository(BudgetRepository) private readonly repository: BudgetRepository
    ) { }

    async getAllBudget(): Promise<Budget[]> {
        const result = await this.repository.findAllBudget();
        if (!result) {
            throw new NotFoundException();
        }
        return result;
    }

}
