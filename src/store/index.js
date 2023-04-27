import nftDataSlice from './features/nftDataSlice';
import poolsDataSlice from './features/poolsDataSlice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    nftDataSlice,
    poolsDataSlice,
  },
});

export default store;
