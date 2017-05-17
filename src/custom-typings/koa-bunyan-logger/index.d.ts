declare module 'koa-bunyan-logger' {
  import { Context, Request, Response, Middleware } from 'koa';
  import * as Logger from 'bunyan';

  function loggerMiddleware(logger?: Logger): Middleware;
  namespace loggerMiddleware { }
  export = loggerMiddleware;

}
