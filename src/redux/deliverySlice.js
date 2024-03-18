import { createSlice } from '@reduxjs/toolkit';

const deliverySlice = createSlice({
  name: 'deliveryMethod',
  initialState: {
    delMethod: 'pickup',
    address: false,
    delPrice: 0,
  },
  reducers: {
    setDeliveryMethod(state, { payload }) {
      state.delMethod = payload;
    },
    setAddress(state, { payload }) {
      state.address = payload;
    },
    setDelPrice(state, { payload }) {
      state.delPrice = payload;
    },
    setResetAddress(state) {
      state.address = false;
      state.delPrice = 0;
    },
  },
});

export const { setDeliveryMethod, setAddress, setDelPrice, setResetAddress } =
  deliverySlice.actions;

export default deliverySlice.reducer;
