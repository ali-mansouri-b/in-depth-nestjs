import { ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

export class HttpExceptionFilter extends HttpException {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception, 'aaaaaaaaaaaaa');
    console.log(exception.getResponse(), 'bbbbbbbbbbbbbbbb');
    console.log(exception.getStatus(), 'cccccccccccccccccc');

    const context = host.switchToHttp();
    const request = context.getRequest<Request>();
    const response = context.getResponse<Response>();

    response.sendStatus(exception.getStatus());
  }
}
