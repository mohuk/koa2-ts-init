import * as compose from 'koa-compose';
import * as Router from 'koa-router';
// Import all routes
import user from './user';

export default () => compose([
  user(),
]);
