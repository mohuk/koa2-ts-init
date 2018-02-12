declare module 'koa-bunyan-logger' {
  import * as Logger from 'bunyan';
  import { Context, Middleware, Request, Response } from 'koa';

  function loggerMiddleware(logger?: Logger): Middleware;
  namespace loggerMiddleware { }
  export = loggerMiddleware;

}
