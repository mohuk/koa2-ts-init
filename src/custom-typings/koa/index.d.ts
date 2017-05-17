import { Context } from 'koa';
import * as Logger from 'bunyan';

declare module 'koa' {
  interface Context {
    log: Logger;
  }
}
