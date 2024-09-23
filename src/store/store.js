// import { createStore } from "redux";
// import reducer from "../redux/reducer";

// const store = createStore(reducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../redux/reducer";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
