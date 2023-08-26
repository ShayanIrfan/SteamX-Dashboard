import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { signInThunk, signUpThunk } from "../thunks/auth.thunk";

// types
import {
  handlePending,
  initialActionTracker,
  handleSuccess,
  handleFailure,
} from "../utils";

const initialState = {
  // user: {
  //   data: {
  //     balances: {
  //       available_balance: 0,
  //     },
  //   },
  // },
  user: null,
  _signIn: initialActionTracker,
  _signUp: initialActionTracker,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state._signIn = initialActionTracker;
      state._signUp = initialActionTracker;
    },

    updateUserData: (state, { payload }) => {
      state.user.data = payload;
    },
  },
  extraReducers: (builder) => {
    // Signin
    builder.addCase(signInThunk.pending, (state) => {
      state._signIn = handlePending();
    });
    builder.addCase(signInThunk.fulfilled, (state, { payload }) => {
      state._signIn = handleSuccess(
        payload.message || "Signed in successfully"
      );

      state.user = payload.payload;
    });
    builder.addCase(signInThunk.rejected, (state, { error, payload }) => {
      console.log("check__________", error);
      state._signIn = handleFailure(error.message);
    });

    // Singup
    builder.addCase(signUpThunk.pending, (state) => {
      state._signUp = handlePending();
    });
    builder.addCase(signUpThunk.fulfilled, (state, { payload }) => {
      state._signUp = handleSuccess(
        payload.message || "Signed up successfully"
      );

      state.user = payload.payload;
    });
    builder.addCase(signUpThunk.rejected, (state, { error }) => {
      state._signUp = handleFailure(error.message);
    });
  },
});

export default authSlice.reducer;
export const { logout, updateUserData } = authSlice.actions;
