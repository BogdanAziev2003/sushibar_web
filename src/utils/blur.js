import { createSlice } from '@reduxjs/toolkit';

const blurSlice = createSlice({
  name: 'blur',
  initialState: {
    open: false,
  },
  reducers: {
    setItOpen(state, { payload }) {
      state.open = payload;
    },
  },
});

export const { setItOpen } = blurSlice.actions;

export default blurSlice.reducer;
