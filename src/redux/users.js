/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const setCookie = (token) => {
  document.cookie = `refresh_token=${token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure`;
};

const signup = createAsyncThunk('users/signup', async (userObject) => {
  const resp = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userObject),
  });
  const data = await resp.json();

  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: null,
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
  },
});

export { signup };
export default userSlice.reducer;
