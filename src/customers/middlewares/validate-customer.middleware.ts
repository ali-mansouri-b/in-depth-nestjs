import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Hello, world. I am inside ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({ error: 'No authentication token provided' });
    if (authorization === '123') {
      next();
    } else {
      return res
        .status(403)
        .send({ error: 'invalid authentication token provided' });
    }
  }
}
