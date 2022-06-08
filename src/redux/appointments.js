/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const apiURL = 'http://localhost:3000/api/appointments';

const fetchAppointments = createAsyncThunk('/appointments', async (user) => {
  const response = await fetch(apiURL, {
    headers: {
      Authorization: `${user.token_type} ${user.access_token}`,
    },
  });
  if (response.ok) return response.json();
  return response.statusText;
});

const initialState = {
  all: [],
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      state.all = action.payload;
    });
  },
});

export {
  fetchAppointments,
};
export default appointmentSlice.reducer;
