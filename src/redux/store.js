import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';
import billionaireReducer from './billionaires';
import appointmentReducer from './appointments';

const store = configureStore({
  reducer: {
    billionaires: billionaireReducer,
    users: userReducer,
    appointments: appointmentReducer,
  },
});

export default store;
