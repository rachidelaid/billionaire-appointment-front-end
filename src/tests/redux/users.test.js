import store from '../../redux/store';
import {
  signup, login, logout, refreshToken,
} from '../../redux/users';

const mockData = {
  signup: {
    user: {
      id: 2,
      name: 'test',
      username: 'test',
      email: 'test@test.com',
      role: 'user',
      access_token: '_tv9f2gITkYUnkdAscyjqAuNpxu4PCU3vXz--7wnYEA',
      token_type: 'Bearer',
      expires_in: 86400,
      refresh_token: 'd83d7b6cb77dd272b128031e63cd6d8474b1548bba5a777704248e0f7e3408d8',
      created_at: 1654947956,
    },
  },
  login: {
    token: {
      access_token: 'uR1dFdYgpAbQr8pgqxZWFmgoS7M2qdbq8QBQTzu_0-k',
      token_type: 'Bearer',
      expires_in: 86400,
      refresh_token: 'zH4M9-fIBZmjL3zTKKZt9JupKzF9GlXZPw5T2u6RWPA',
      created_at: 1654948122,
    },
    user: {
      id: 1,
      username: 'rachidelaid',
      name: 'rachid',
      role: 'admin',
      created_at: '2022-06-11T10:37:50.894Z',
      updated_at: '2022-06-11T10:37:50.894Z',
      email: 'admin@test.com',
    },
  },
  logout: {},
};

const response = (url) => {
  if (url.includes('users')) return mockData.signup;
  if (url.includes('token')) return mockData.login;
  if (url.includes('revoke')) return mockData.logout;
  return null;
};

global.fetch = (url) => Promise.resolve({
  json: () => Promise.resolve(
    response(url),
  ),
});

describe('redux users', () => {
  test('signup a user', async () => {
    await store.dispatch(signup({}));
    const { users } = store.getState();
    expect(users.user.name).toEqual('test');
  });

  test('login a user', async () => {
    await store.dispatch(login({}));
    const { users } = store.getState();
    expect(users.user).toBeTruthy();
  });

  test('logout a user', async () => {
    await store.dispatch(logout({}));
    const { users } = store.getState();
    expect(users.user).toBeFalsy();
  });

  test('refresh a token', async () => {
    document.cookie = 'refresh_token=d83';
    await store.dispatch(refreshToken());
    const { users } = store.getState();
    expect(users.user).toBeTruthy();
  });
});
