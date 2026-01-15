import { Controller, Get, Param } from '@nestjs/common';
import { TestApiMethodService } from './test-api-method.service';

@Controller('test-api-method')
export class TestApiMethodController {
  constructor(private readonly student: TestApiMethodService) {}
  @Get()
  giveAll() {
    return this.student.getAllStudent();
  }

  @Get(':id')
  giveById(@Param('id') id: string) {
    return this.student.getStudentById(Number(id));
  }
}
