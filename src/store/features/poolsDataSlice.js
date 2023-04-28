/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-28 02:08:52
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 20:28:06
 * @FilePath: \workspace\ez-swap\src\store\features\poolsDataSlice.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const { createSlice } = require('@reduxjs/toolkit');

const poolsSlice = createSlice({
  name: 'poolsData',
  initialState: {
    poolsData: {},
  },

  reducers: {
    setPoolsData: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.poolsData = action.payload;
    },
  },
});

export const { setPoolsData } = poolsSlice.actions;
export default poolsSlice.reducer;
