/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-28 01:30:23
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 20:26:32
 * @FilePath: \workspace\ez-swap\src\store\features\nftDataSlice.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { createSlice } from '@reduxjs/toolkit';

const nftDataSlice = createSlice({
  name: 'nftData',
  initialState: {
    nftData: {},
  },

  reducers: {
    setNftData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.nftData = action.payload;
    },
  },
});

export const { setNftData } = nftDataSlice.actions;
export default nftDataSlice.reducer;
