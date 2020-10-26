import { createSlice } from '@reduxjs/toolkit';

export const commonSlice = createSlice({
  name: 'common',
  initialState: {
    activeNavItem: ''
  },
  reducers: {
    setActiveNavItem: {
      reducer: (state, action) => {
        state.activeNavItem = action.payload.toLowerCase();
      },
      prepare: (value) => ({ payload: value || '' })
    }
  }
});

export const { setActiveNavItem } = commonSlice.actions;

export default commonSlice.reducer;
