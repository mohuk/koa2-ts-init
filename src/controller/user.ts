import { Context } from 'koa';
import { getUsers } from '../service/user';

export const get = (ctx: Context) => {
  ctx.body = { users: getUsers(), time: Date.now() };
};

export const post = (ctx: Context) => {
  ctx.body = '[POST]: /user';
};

export const put = (ctx: Context) => {
  ctx.body = '[PUT]: /user';
};
