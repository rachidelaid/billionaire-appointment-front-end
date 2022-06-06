import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';
import billionaireReducer from './billionaires';

const store = configureStore({
  reducer: {
    billionaires: billionaireReducer,
    users: userReducer,
  },
});

export default store;
