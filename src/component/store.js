import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './reducer';

const store = configureStore({
  reducer: imageReducer,
});

export default store;
