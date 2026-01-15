import { Test, TestingModule } from '@nestjs/testing';
import { TestApiMethodService } from './test-api-method.service';

describe('TestApiMethodService', () => {
  let service: TestApiMethodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestApiMethodService],
    }).compile();

    service = module.get<TestApiMethodService>(TestApiMethodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
