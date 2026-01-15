import { Test, TestingModule } from '@nestjs/testing';
import { TestApiMethodController } from './test-api-method.controller';

describe('TestApiMethodController', () => {
  let controller: TestApiMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestApiMethodController],
    }).compile();

    controller = module.get<TestApiMethodController>(TestApiMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
