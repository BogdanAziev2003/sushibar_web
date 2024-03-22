import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';

export const getItems = createAsyncThunk('items/getItems', async () => {
  try {
    const { data } = await axios.get('/get-menu');
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  items: [],
  itemsInCart: [],
  totalPrice: 0,
  delPrice: 0,
  isLoading: true,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    clearCart(state) {
      state.itemsInCart = [];
      state.totalPrice = 0;
    },
    addItem(state, action) {
      const items = action.payload;
      state.itemsInCart.push(items);
      state.totalPrice += items.price;
    },
    removeItem(state, action) {
      const item = action.payload;
      const index = state.itemsInCart
        .reverse()
        .findIndex((i) => i.id === item.id);

      if (index !== -1) {
        const deleteItem = state.itemsInCart.splice(index, 1)[0];
        state.itemsInCart = state.itemsInCart.reverse();
        state.totalPrice -= deleteItem.price;
      }
    },
    removeItemsByCompound(state, { payload }) {
      const item = payload;
      state.itemsInCart = state.itemsInCart.filter((i) => {
        if (
          i.id === item.id &&
          i.price === item.price &&
          JSON.stringify(i.modifiers) === JSON.stringify(item.modifiers) &&
          JSON.stringify(i.sizes) === JSON.stringify(item.sizes) &&
          JSON.stringify(i?.changes) === JSON.stringify(item?.changes)
        ) {
          state.totalPrice -= i.price;
          return false;
        }
        return true;
      });
    },
    plusDelPrice(state, { payload }) {
      if (state.delPrice === 0) {
        state.totalPrice += payload;
      } else {
        state.totalPrice = state.totalPrice - state.delPrice + payload;
      }
      state.delPrice = payload;
    },
    delPriceInStoreNull(state) {
      if (state.totalPrice + state.delPrice === state.delPrice) {
        state.delPrice = 0;
      } else {
        state.totalPrice -= state.delPrice;
        state.delPrice = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(getItems.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  addItem,
  removeItem,
  removeItemsByCompound,
  clearCart,
  plusDelPrice,
  delPriceInStoreNull,
} = itemsSlice.actions;

export default itemsSlice.reducer;
