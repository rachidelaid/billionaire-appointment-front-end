/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchBillionaires = createAsyncThunk('/message/random', async () => {
  const response = await fetch('http://localhost:3000/api/billionaires');
  if (response.ok) return response.json();
  return response.statusText;
});
const initialState = {
  all: [],
};
const billionaireSlice = createSlice({
  name: 'billionaires',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBillionaires.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});
export { fetchBillionaires };
export default billionaireSlice.reducer;
