import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comment: '',
  },
  reducers: {
    setComment(state, { payload }) {
      state.comment = payload;
    },
  },
});

export const { setComment } = commentSlice.actions;

export default commentSlice.reducer;
