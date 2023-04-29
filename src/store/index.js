/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-27 18:32:47
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 22:24:59
 * @FilePath: \workspace\ez-swap\src\store\index.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import nftDataSlice from './features/nftDataSlice';
import poolsDataSlice from './features/poolsDataSlice';
import uiSlice from './features/ui-slice';
import inputWalletSlice from './features/input-wallet-slice';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    nftDataSlice,
    poolsDataSlice,
    uiSlice,
    inputWalletSlice,
  },
});

export default store;
