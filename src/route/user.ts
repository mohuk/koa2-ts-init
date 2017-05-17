import { methodNotAllowed, notImplemented } from 'boom';
import * as compose from 'koa-compose';
import * as Router from 'koa-router';

import * as Ctrl from '../controller/user';

const router = new Router({
  prefix: '/user',
});

router.get('/', Ctrl.get);
router.post('/', Ctrl.post);
router.put('/', Ctrl.put);

const routes = router.routes();
const allowedMethods = router.allowedMethods({
  throw: true,
  notImplemented: () => notImplemented(),
  methodNotAllowed: () => methodNotAllowed(),
});

export default () => compose([
  routes,
  allowedMethods,
]);
