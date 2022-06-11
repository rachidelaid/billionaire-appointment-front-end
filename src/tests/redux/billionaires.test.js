import store from '../../redux/store';
import {
  fetchBillionaires, fetchCurrentBillionaire, addBillionaire, deleteBillionaire,
} from '../../redux/billionaires';
import { signup } from '../../redux/users';

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
  billionaires: [{
    id: 11,
    name: 'test',
    title: 'CEO of Netease',
    image: 'image.png',
    price: 46.0,
    description: 'sadasdasdasd',
    created_at: '2022-06-11T11:59:00.723Z',
    updated_at: '2022-06-11T11:59:00.723Z',
  }],
  billionaire: {
    id: 11,
    name: 'test',
    title: 'CEO of Netease',
    image: 'image.png',
    price: 46.0,
    description: 'sadasdasdasd',
    created_at: '2022-06-11T11:59:00.723Z',
    updated_at: '2022-06-11T11:59:00.723Z',
  },
};

const response = (url, params) => {
  if (url.includes('users')) return mockData.signup;
  if (url.includes('billionaires/')) return mockData.billionaire;
  if (url.includes('billionaires/') && params && params.method === 'DELETE') return true;
  if (url.includes('billionaires') && params && params.method === 'POST') return mockData.billionaire;
  if (url.includes('billionaires')) return mockData.billionaires;
  return null;
};

global.fetch = (url, params) => Promise.resolve({
  ok: true,
  json: () => Promise.resolve(
    response(url, params),
  ),
});

describe('redux billionaires', () => {
  test('fetch billionaires', async () => {
    await store.dispatch(fetchBillionaires());
    const { billionaires } = store.getState();
    expect(billionaires.all.length).toBe(1);
  });

  test('fetch current billionaire', async () => {
    await store.dispatch(fetchCurrentBillionaire(11));
    const { billionaires } = store.getState();
    expect(billionaires.current.id).toBe(11);
  });

  test('add billionaire', async () => {
    await store.dispatch(signup({}));
    await store.dispatch(addBillionaire({}));
    const { billionaires } = store.getState();
    expect(billionaires.all.length).toBe(2);
  });

  test('delete billionaire', async () => {
    await store.dispatch(deleteBillionaire(11));
    const { billionaires } = store.getState();
    expect(billionaires.all.length).toBe(0);
  });
});
