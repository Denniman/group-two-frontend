import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login, register, logOut } from "../../network";
import { persistor } from "../store";
// import { __ROOT_REDUX_STATE_KEY__ } from "../../constants";

const initialState = {
  error: null,
  data: null,
  isLoading: false,
  accessToken: null,
  signUpSuccess: false,
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
    await register(payload);
    toast.success("Congrats!🎉 Welcome to SwitchCommerce.");
  } catch (error) {
    const message = error?.response?.data.message;
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("session/logout", async (thunkAPI) => {
  try {
    await logOut();
    persistor.purge();
    persistor.flush();
    toast.success("Success");
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
      state.signUpSuccess = false;
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
    builder.addCase(registerUser.fulfilled, (state) => {
      state.isLoading = false;
      state.signUpSuccess = true;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.signUpSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = sessionSlice.actions;

export default sessionSlice.reducer;
