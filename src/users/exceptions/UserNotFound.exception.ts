import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(response?: string | Record<string, any>, status?: number) {
    super(response || 'User Not Found', status || HttpStatus.NOT_FOUND);
  }
}
