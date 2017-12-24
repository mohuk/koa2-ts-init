import { getUsers } from '../../service/user';

describe('Get All User Service', () => {
  test('get users service should return a user list ', () => {
    const users = [
      'ava',
      'boyd',
      'raylan',
      'winona',
    ];
    expect(getUsers()).toEqual(users);
  });
});
