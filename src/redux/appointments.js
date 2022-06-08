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

const deleteAppointment = createAsyncThunk('/appointments/delete', async ({ id, user }) => {
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
    builder.addCase(deleteAppointment.fulfilled, (state, action) => {
      if (action.payload) {
        state.all = state.all.filter((appointment) => appointment.id !== action.payload);
      }
    });
  },
});

export {
  fetchAppointments, deleteAppointment,
};
export default appointmentSlice.reducer;
