import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    add: (state, value) => {
      state.value = value.payload;
    },
    remove: (state) => {
      state.value = state.value.slice(0, -1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = searchSlice.actions;

export default searchSlice.reducer;
