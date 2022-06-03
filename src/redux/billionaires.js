/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchBillionaires = createAsyncThunk('/message/random', async () => {
  const response = await fetch('http://localhost:3000/api/billionaires');
  if (response.ok) return response.json();
  return response.statusText;
});
const initialState = {
  all: [],
  current: [],
  offset: 0,
};
const billionaireSlice = createSlice({
  name: 'billionaires',
  initialState,
  reducers: {
    next: (state) => {
      state.current = state.all.slice(state.offset + 3, 3);
      state.offset += 3;
    },
    back: (state) => {
      state.current = state.all.slice(state.offset - 3, 3);
      state.offset -= 3;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBillionaires.fulfilled, (state, action) => {
      state.all = action.payload;
      state.current = action.payload.slice(state.offset, 3);
    });
  },
});
export const { next, back } = billionaireSlice.actions;
export { fetchBillionaires };
export default billionaireSlice.reducer;
