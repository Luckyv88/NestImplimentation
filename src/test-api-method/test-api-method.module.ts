import { Module } from '@nestjs/common';
import { TestApiMethodController } from './test-api-method.controller';
import { TestApiMethodService } from './test-api-method.service';

@Module({
  controllers: [TestApiMethodController],
  providers: [TestApiMethodService],
})
export class TestApiMethodModule {}
