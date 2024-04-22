import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createStore } from "../../network";

const initialState = {
  error: null,
  data: null,
  storeId: null,
  storeName: null,
  storeUrl: null,
  isLoading: false,
};

export const createMerchantStore = createAsyncThunk(
  "merchantStore/create",
  async (payload, thunkAPI) => {
    try {
      const data = await createStore(payload);
      console.log("data!", data);
      toast.success("Store created successfully!");
      return data;
    } catch (error) {
      const message = error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const merchantStoreSlice = createSlice({
  name: "merchantStore",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createMerchantStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createMerchantStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.storeName = action.payload;
    });
    builder.addCase(createMerchantStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.error = action.error.message;
    });
  },
});

export const { reset } = merchantStoreSlice.actions;

export default merchantStoreSlice.reducer;
