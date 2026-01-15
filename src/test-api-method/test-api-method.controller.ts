import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

  @Post()
  createNewStudent(@Body() body: { name: string; age: number }) {
    return this.student.insertStudent(body);
  }

  @Put(':id')
  updateStudent(
    @Param('id') id: string,
    @Body() body: { name: string; age: number },
  ) {
    return this.student.updateStudent(Number(id), body);
  }

  @Patch(':id')
  patchStudent(
    @Param('id') id: string,
    @Body() body: Partial<{ name: string; age: number }>,
  ) {
    return this.student.patchStudent(Number(id), body);
  }
}
