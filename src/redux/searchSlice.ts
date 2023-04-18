import { createSlice } from '@reduxjs/toolkit';
import { userType } from 'types/userType';
export interface SearchState {
  value: string;
  searchError: boolean;
  searchResults: userType[];
  findThis: string;
}

const initialState: SearchState = {
  value: '',
  searchError: false,
  searchResults: [],
  findThis: '',
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
    searchButton: (state, value) => {
      state.findThis = value.payload;
    },
  },
});

export const { add, handleError, searchResultsHandler, searchButton } = searchSlice.actions;

export default searchSlice.reducer;
