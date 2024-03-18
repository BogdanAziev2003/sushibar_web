import { createSlice } from '@reduxjs/toolkit';

const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    phone: '',
  },
  reducers: {
    setPhone(state, { payload }) {
      state.phone = payload;
    },
  },
});

export const { setPhone } = phoneSlice.actions;

export default phoneSlice.reducer;
