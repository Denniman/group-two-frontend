import { toast } from "sonner";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { products, getAllProducts } from "../../network";

const initialState = {
  error: null,
  products: null,
  isLoading: false,
};

export const createProducts = createAsyncThunk(
  "merchantStore/create",
  async (payload, thunkAPI) => {
    try {
      const data = await products(payload);
      console.log("success!!!", data);
      toast.success("Products created successfully!");
      return data;
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "merchantStore/getproducts",
  async (payload, thunkAPI) => {
    try {
      const { products } = await getAllProducts(payload);
      return products;
    } catch (error) {
      const message = error?.response?.data?.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productsSlice = createSlice({
  name: "products store",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(createProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = productsSlice.actions;

export default productsSlice.reducer;
