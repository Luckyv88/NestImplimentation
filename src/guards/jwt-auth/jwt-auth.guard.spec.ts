import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    const mockJwtService = new JwtService({});

    expect(new JwtAuthGuard(mockJwtService)).toBeDefined();
  });
});
