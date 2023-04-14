import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants';
import { userType } from 'types/userType';
type responseUsersType = {
  results: userType[];
};
export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({
    getCharacters: builder.query<responseUsersType, string>({
      query: () => 'character',
    }),
    getCharacterById: builder.query<userType, string>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = characterApi;
