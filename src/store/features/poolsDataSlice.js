const { createSlice } = require('@reduxjs/toolkit');

const poolsSlice = createSlice({
  name: 'poolsData',
  initialState: {
    poolsData: {},
  },

  reducers: {
    setPoolsData: (state, action) => {
      state.poolsData = action.payload;
    },
  },
});

export const { setPoolsData } = poolsSlice.actions;
export default poolsSlice.reducer;
