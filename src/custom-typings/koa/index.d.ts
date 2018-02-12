import * as Logger from 'bunyan';
import { Context } from 'koa';

declare module 'koa' {
  interface Context {
    log: Logger;
  }
}
