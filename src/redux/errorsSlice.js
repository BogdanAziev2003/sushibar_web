import { createSlice } from '@reduxjs/toolkit';

const errorsSlice = createSlice({
  name: 'errors',
  initialState: {
    phoneIsFalse: null,
    addressIsFalse: null,
  },
  reducers: {
    setPhoneError(state, { payload }) {
      state.phoneIsFalse = payload;
    },
    setAddressError(state, { payload }) {
      state.addressIsFalse = payload;
    },
  },
});

export const { setPhoneError, setAddressError } = errorsSlice.actions;

export default errorsSlice.reducer;
