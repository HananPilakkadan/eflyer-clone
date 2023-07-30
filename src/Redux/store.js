import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/product";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
