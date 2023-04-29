/* eslint-disable no-param-reassign */
/*
 * @Author: Beau pg.beau@outlook.com
 * @Date: 2023-04-28 22:18:38
 * @LastEditors: Beau pg.beau@outlook.com
 * @LastEditTime: 2023-04-28 22:21:44
 * @FilePath: \workspace\ez-swap\src\store\features\ui-slice.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
const { createSlice } = require('@reduxjs/toolkit');

const uiSlice = createSlice({
  name: 'ui',
  initialState: { searchInputIsVisible: false },
  reducers: {
    setSearchInputIsVisible(state) {
      state.searchInputIsVisible = true;
    },
    setSearchInputIsHidden(state) {
      state.searchInputIsVisible = false;
    },
  },
});

export const { setSearchInputIsVisible, setSearchInputIsHidden } =
  uiSlice.actions;
export default uiSlice.reducer;
