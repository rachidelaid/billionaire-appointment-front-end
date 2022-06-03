import { configureStore } from '@reduxjs/toolkit';
import billionareReducer from './billionaires'

const store = configureStore({
  reducer: {
    billionares: billionareReducer
  },
});

export default store;
