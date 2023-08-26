import { configureStore } from "@reduxjs/toolkit";

// Reducer
import authReducer from "./slices/auth.slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
