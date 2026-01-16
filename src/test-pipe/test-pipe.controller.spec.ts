import { Test, TestingModule } from '@nestjs/testing';
import { TestPipeController } from './test-pipe.controller';

describe('TestPipeController', () => {
  let controller: TestPipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestPipeController],
    }).compile();

    controller = module.get<TestPipeController>(TestPipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
