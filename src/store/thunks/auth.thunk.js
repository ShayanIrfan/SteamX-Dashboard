import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios";

const AUTH_URLS = {
  SIGN_IN: "admin/sign-in",
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
