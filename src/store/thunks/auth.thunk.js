import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

const AUTH_URLS = {
  SIGN_IN: "user/sign-in",
  SIGN_UP: "user/sign-up",
};

export const signInThunk = createAsyncThunk(
  "auth/signin-thunk",
  async (args) => {
    try {
      const response = await axiosInstance.post(AUTH_URLS.SIGN_IN, args);
      console.log("check__________");
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e?.response?.data?.message || e.message);
      }
    }
  }
);

export const signUpThunk = createAsyncThunk(
  "auth/signup-thunk",
  async (args) => {
    try {
      console.log("check__________");
      const response = await axiosInstance.post(AUTH_URLS.SIGN_UP, args);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(e?.response?.data?.message || e.message);
      }
    }
  }
);
