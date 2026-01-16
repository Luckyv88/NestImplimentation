import { Test, TestingModule } from '@nestjs/testing';
import { TestroleguardController } from './testroleguard.controller';

describe('TestroleguardController', () => {
  let controller: TestroleguardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestroleguardController],
    }).compile();

    controller = module.get<TestroleguardController>(TestroleguardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
