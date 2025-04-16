import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Thêm sản phẩm vào giỏ hàng
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ, cập nhật số lượng
        existingItem.quantity += item.quantity;
      } else {
        // Nếu sản phẩm chưa có trong giỏ, thêm mới
        state.cartItems.push(item);
      }
    },
    // Xóa sản phẩm khỏi giỏ hàng
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((cartItem) => cartItem.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
  },
});


export const { addItem, removeItem, updateQuantity } = cartSlice.actions;


export default cartSlice.reducer;
