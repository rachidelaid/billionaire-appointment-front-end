/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteCookie, getCookie } from '../util/cookiesActions';

const apiUrl = 'http://localhost:3000';

const signup = createAsyncThunk('users/signup', async (userObject) => {
  const resp = await fetch(`${apiUrl}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObject),
  });
  const data = await resp.json();

  return data;
});

const login = createAsyncThunk('users/login', async (userObject) => {
  const resp = await fetch(`${apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObject),
  });
  const data = await resp.json();

  return data;
});

const logout = createAsyncThunk('users/logout', async (userObject) => {
  const resp = await fetch(`${apiUrl}/oauth/revoke`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObject),
  });
  const data = await resp.json();

  return data;
});

const refreshToken = createAsyncThunk('users/refreshToken', async () => {
  const token = getCookie();
  if (!token) return null;

  const resp = await fetch(`${apiUrl}/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'refresh_token',
      refresh_token: token,
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    }),
  });
  const data = await resp.json();

  return data;
});

const handleLogin = (state, action) => {
  state.loading = false;
  if (action.payload && action.payload.user) {
    setCookie(action.payload.token.refresh_token);
    state.user = { ...action.payload.user, ...action.payload.token };
  } else {
    state.user = action.payload;
  }
};

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      if (action.payload.user) {
        setCookie(action.payload.user.refresh_token);
        state.user = action.payload.user;
      } else if (typeof action.payload.error === 'string') {
        state.user = { error: [action.payload.error] };
      } else {
        state.user = action.payload;
      }
    });

    builder.addCase(login.fulfilled, handleLogin);

    builder.addCase(refreshToken.fulfilled, handleLogin);

    builder.addCase(logout.fulfilled, (state) => {
      deleteCookie();
      state.user = null;
    });
  },
});

export {
  signup, login, logout, refreshToken,
};
export default userSlice.reducer;
