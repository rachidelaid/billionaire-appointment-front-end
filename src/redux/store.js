import { configureStore } from '@reduxjs/toolkit';
import billionaireReducer from './billionaires';

const store = configureStore({
  reducer: {
    billionaires: billionaireReducer,
  },
});

export default store;
