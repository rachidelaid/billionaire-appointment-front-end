/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchBillionaires = createAsyncThunk('/billionaires', async () => {
  const response = await fetch('http://localhost:3000/api/billionaires');
  if (response.ok) return response.json();
  return response.statusText;
});
const fetchCurrentBillionaire = createAsyncThunk('/billionaire/details', async (id) => {
  const response = await fetch(`http://localhost:3000/api/billionaires/${id}`);
  if (response.ok) return response.json();
  return response.statusText;
});
const initialState = {
  all: [],
  limit: [],
  offset: 0,
  total: 0,
  current: {},
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBillionaires.fulfilled, (state, action) => {
      state.all = action.payload;
      state.limit = action.payload.slice(state.offset, state.offset + 3);
      state.total = action.payload.length;
    });
    builder.addCase(fetchCurrentBillionaire.fulfilled, (state, action) => {
      state.current = action.payload;
    });
  },
});
export const { next, back } = billionaireSlice.actions;
export { fetchBillionaires, fetchCurrentBillionaire };
export default billionaireSlice.reducer;