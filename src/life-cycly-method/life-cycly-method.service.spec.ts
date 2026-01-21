import { Test, TestingModule } from '@nestjs/testing';
import { LifeCyclyMethodService } from './life-cycly-method.service';

describe('LifeCyclyMethodService', () => {
  let service: LifeCyclyMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LifeCyclyMethodService],
    }).compile();

    service = module.get<LifeCyclyMethodService>(LifeCyclyMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
