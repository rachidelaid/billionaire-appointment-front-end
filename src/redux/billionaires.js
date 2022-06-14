/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import baseUrl from './base_url';

const apiURL = `${baseUrl}/api/billionaires`;

const fetchBillionaires = createAsyncThunk('/billionaires', async () => {
  const response = await fetch(apiURL);
  if (response.ok) return response.json();
  return response.statusText;
});
const fetchCurrentBillionaire = createAsyncThunk('/billionaire/details', async (id) => {
  const response = await fetch(`${apiURL}/${id}`);
  if (response.ok) return response.json();
  return response.statusText;
});

const addBillionaire = createAsyncThunk('/billionaires/add', async (billionaire, { getState }) => {
  const { user } = getState().users;

  const response = await fetch(apiURL, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${user.token_type} ${user.access_token}`,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(billionaire),
  });

  const result = await response.json();

  return result;
});

const deleteBillionaire = createAsyncThunk('/billionaires/delete', async (id, { getState }) => {
  const { user } = getState().users;

  const response = await fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `${user.token_type} ${user.access_token}` },
  });

  if (response.ok) {
    return id;
  }
  return false;
});

const initialState = {
  all: [],
  limit: [],
  offset: 0,
  total: 0,
  current: {},
  loading: false,
};

const billionaireSlice = createSlice({
  name: 'billionaires',
  initialState,
  reducers: {
    next: (state) => {
      const start = state.offset + 3;
      if (start > state.all.length - 1) return;
      state.limit = state.all.slice(start, start + 3);
      state.offset += 3;
    },
    back: (state) => {
      const start = state.offset - 3;
      if (start < 0) return;
      state.limit = state.all.slice(start, start + 3);
      state.offset -= 3;
    },
    removeCurrent: (state) => {
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBillionaires.fulfilled, (state, action) => {
      state.all = action.payload;
      state.limit = action.payload.slice(state.offset, state.offset + 3);
      state.total = action.payload.length;
    });
    builder
      .addCase(fetchCurrentBillionaire.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCurrentBillionaire.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      });
    builder.addCase(addBillionaire.fulfilled, (state, action) => {
      if (action.payload.id) {
        state.all = [action.payload, ...state.all];
        state.limit = state.all.slice(state.offset, state.offset + 3);
        state.total = state.all.length;
        state.offset = 0;
      }
    });
    builder.addCase(deleteBillionaire.fulfilled, (state, action) => {
      if (action.payload) {
        state.all = state.all.filter((billionaire) => billionaire.id !== action.payload);
        state.limit = state.all.slice(state.offset, state.offset + 3);
        state.total = state.all.length;
        state.offset = 0;
      }
    });
  },
});
export const { next, back, removeCurrent } = billionaireSlice.actions;
export {
  fetchBillionaires, fetchCurrentBillionaire, addBillionaire, deleteBillionaire,
};
export default billionaireSlice.reducer;
