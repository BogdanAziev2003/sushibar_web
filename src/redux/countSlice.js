import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'comment',
  initialState: {
    count: 1,
  },
  reducers: {
    zeroCount(state) {
      state.count = 1;
    },
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

export const { addCount, minusCount, zeroCount } = countSlice.actions;

export default countSlice.reducer;
