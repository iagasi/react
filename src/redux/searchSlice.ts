import { createSlice } from '@reduxjs/toolkit';
import { userType } from 'types/userType';
export interface SearchState {
  value: string;
  searchError: boolean;
  searchResults: userType[];
}

const initialState: SearchState = {
  value: '',
  searchError: false,
  searchResults: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    add: (state, value) => {
      state.value = value.payload;
    },

    handleError: (state, { payload }) => {
      state.searchError = payload;
    },
    searchResultsHandler: (state, value) => {
      state.searchResults = value.payload;
    },
  },
});

export const { add, handleError, searchResultsHandler } = searchSlice.actions;

export default searchSlice.reducer;
