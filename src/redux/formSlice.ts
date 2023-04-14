import { createSlice } from '@reduxjs/toolkit';
export interface FormState {
  name: string;
  surname: string;
  personalData: [];
  countries: string;
  date: string;
  gender: string;
}

const initialState: FormState = {
  name: '777',
  surname: '',
  personalData: [],
  countries: '',
  date: '',
  gender: '',
};

export const searchSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    name: (state, value) => {
      state.name = value.payload;
    },
    surname: (state, value) => {
      state.surname = value.payload;
    },
    personalDate: (state, { payload }) => {
      state.personalData = payload;
    },
    countries: (state, value) => {
      state.countries = value.payload;
    },
    date: (state, value) => {
      state.date = value.payload;
    },
    gender: (state, value) => {
      state.gender = value.payload;
    },
  },
});

export const { name, surname, personalDate, countries, date, gender } = searchSlice.actions;

export default searchSlice.reducer;
