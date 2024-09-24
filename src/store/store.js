// import { createStore } from "redux";
// import reducer from "../redux/reducer";

// const store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/reducer";
import cartReducer from "../redux/cartReducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
