import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createStore, getMerchantStore } from "../../network";

const initialState = {
  error: null,
  storeId: null,
  storeName: null,
  storeUrl: null,
  isLoading: false,
};

export const createMerchantStore = createAsyncThunk(
  "merchantStore/create",
  async (payload, thunkAPI) => {
    try {
      const { store } = await createStore(payload);
      toast.success("Store created successfully!");
      return store;
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getStore = createAsyncThunk("merchantStore/get-store", async (_, thunkAPI) => {
  try {
    const data = await getMerchantStore();
    return data;
  } catch (error) {
    const message = error?.response?.data?.message;
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
    builder.addCase(createMerchantStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createMerchantStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.storeUrl = action.payload.storeUrl;
      state.storeId = action.payload.storeId;
      state.storeName = action.payload.storeName;
    });
    builder.addCase(createMerchantStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.error = action.error.message;
    });
    builder.addCase(getStore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getStore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.storeId = action.payload.id;
      state.storeName = action.payload.storeName;
    });
    builder.addCase(getStore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { reset } = merchantStoreSlice.actions;

export default merchantStoreSlice.reducer;
