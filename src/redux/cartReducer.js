import { createSlice } from "@reduxjs/toolkit";

const reducer = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.push(action.payload); // 새 제품을 장바구니에 추가
      // 중복 방지: 이미 있는 제품은 추가하지 않음
      if (!state.includes(id)) {
        state.push(id);
      }
    },
  },
});

export const { addToCart } = reducer.actions;
export const selectCart = (state) => state.cart;
export default reducer.reducer;
