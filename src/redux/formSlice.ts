import { createSlice } from '@reduxjs/toolkit';
import { IFormCard } from 'components/form/types';
export interface FormState {
  name: string;
  surname: string;
  personalData: string[];
  countries: string;
  date: string;
  gender: string;
  file: string;
  createdCards: IFormCard[];
}

const initialState: FormState = {
  name: '',
  surname: '',
  personalData: [],
  countries: '',
  date: '',
  gender: '',
  file: '',

  createdCards: [],
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
    personalData: (state, { payload }) => {
      if (state.personalData.includes(payload)) {
        state.personalData = state.personalData.filter((e) => e !== payload);
      } else {
        state.personalData.push(payload);
      }
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
    file: (state, value) => {
      state.file = value.payload;
    },
    setFormCards: (state, value) => {
      state.createdCards.push(value.payload);
    },
    reset: (state) => {
      (state.countries = ''),
        (state.date = ''),
        (state.gender = ''),
        (state.name = ''),
        (state.personalData = []),
        (state.surname = '');
    },
  },
});

export const { name, surname, personalData, countries, date, gender, file, setFormCards, reset } =
  searchSlice.actions;

export default searchSlice.reducer;
