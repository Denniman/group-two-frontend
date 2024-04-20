import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register } from "../../network";

const initialState = {
  error: null,
  data: null,
  isLoading: false,
  accessToken: null,
};

export const loginUser = createAsyncThunk("session/login", async (payload, thunkAPI) => {
  try {
    const data = await login(payload);
    toast.success("Welcome to back!👋");
    return data;
  } catch (error) {
    const message = error?.response?.data.message;
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const registerUser = createAsyncThunk("session/signup", async (payload, thunkAPI) => {
  try {
    const data = await register(payload);
    toast.success("Congrats!🎉 Welcome to SwitchCommerce.");
    return data;
  } catch (error) {
    const message = error?.response?.data.message;
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const sessionSlice = createSlice({
  name: "sessionSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = sessionSlice.actions;

export default sessionSlice.reducer;
