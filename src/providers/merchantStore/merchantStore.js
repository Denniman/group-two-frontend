import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../network";

const initialState = {
  error: null,
  data: null,
  isLoading: false,
};

export const loginUser = createAsyncThunk("merchantStore/create", async (payload, thunkAPI) => {
  try {
    const data = await login(payload);
    return data;
  } catch (error) {
    const message = error.message;
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const merchantStoreSlice = createSlice({
  name: "merchantStore",
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
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.error = action.error.message;
    });
  },
});

export const { reset } = merchantStoreSlice.actions;

export default merchantStoreSlice.reducer;
