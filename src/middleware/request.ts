import { Context } from 'koa';
import * as compose  from 'koa-compose';

const logger = async (ctx: Context, next: Function) => {
  ctx.log.info(`request from ${ctx.request.ip} to ${ctx.path}`);
  await next();
};

export default () => compose([
  logger,
]);
