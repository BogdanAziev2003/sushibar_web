import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'comment',
  initialState: {
    count: 1,
  },
  reducers: {
    addCount(state) {
      state.count++;
    },
    minusCount(state) {
      if (state.count > 1) {
        state.count--;
      }
    },
  },
});

export const { addCount, minusCount } = countSlice.actions;

export default countSlice.reducer;
