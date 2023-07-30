import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../axiosConfig";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (slug) => {
    if (slug === undefined || slug === null) {
      const response = await axios.get(BASE_URL);
      return response.data;
    } else {
      const response = await axios.get(`${BASE_URL}/category/${slug}`);
      return response.data;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    error: null,
    loading: true,
    category: null,
    searchTerm: ''
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
        console.log(state.product);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = productSlice.actions;

export default productSlice.reducer;
