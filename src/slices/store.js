import { configureStore } from "@reduxjs/toolkit";
import customerReducer  from './customerSlice';

export const store = configureStore({
    devTools:false,
    reducer: {
        customers: customerReducer
    }
})