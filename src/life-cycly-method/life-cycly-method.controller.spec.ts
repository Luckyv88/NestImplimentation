import { Test, TestingModule } from '@nestjs/testing';
import { LifeCyclyMethodController } from './life-cycly-method.controller';

describe('LifeCyclyMethodController', () => {
  let controller: LifeCyclyMethodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LifeCyclyMethodController],
    }).compile();

    controller = module.get<LifeCyclyMethodController>(LifeCyclyMethodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
