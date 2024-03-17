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
  isLoading: false,
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
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

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
