import { Controller, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employees: EmployeeService) {}
  @Get()
  giveOutPut() {
    return this.employees.givePut();
  }
}
