/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/*It's just declared for practice but not used*/
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const auth = req.headers['authorization'];
    if (auth) {
      req.token = auth.split(' ')[1];
    }
    next();
  }
}
