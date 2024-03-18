import { createSlice } from '@reduxjs/toolkit';

const paymethodSlice = createSlice({
  name: 'payMethod',
  initialState: {
    payMethod: 'cash',
  },
  reducers: {
    setPayMethod(state, { payload }) {
      state.payMethod = payload;
    },
  },
});

export const { setPayMethod } = paymethodSlice.actions;

export default paymethodSlice.reducer;
