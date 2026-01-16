import { Controller, Post, Body } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipe/uppercase/uppercase.pipe';

@Controller('test-pipe')
export class TestPipeController {
  @Post('custom')
  transferName(@Body('name', new UppercasePipe()) name: string) {
    return { message: `Chnage the to the upper case ${name}` };
  }
}
