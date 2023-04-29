/* eslint-disable no-param-reassign */
const { createSlice } = require('@reduxjs/toolkit');

const inputWalletSlice = createSlice({
  name: 'inputWallet',
  initialState: {
    inputWallet: '',
  },
  reducers: {
    setInputWallet: (state, action) => {
      state.inputWallet = action.payload;
    },
  },
});

export const { setInputWallet } = inputWalletSlice.actions;
export default inputWalletSlice.reducer;
