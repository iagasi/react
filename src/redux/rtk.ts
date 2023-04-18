import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants';
import { userType } from 'types/userType';
type responseUsersType = {
  results: userType[];
};

function handleUrl(name: string) {
  if (name.length) {
    return `character?name=${name}`;
  } else {
    return 'character';
  }
}

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
    getCharacterByName: builder.query<responseUsersType, string>({
      query: (name) => ({
        url: handleUrl(name),
        // This is the same as passing 'text'
        validateStatus: (response, result) => response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery, useGetCharacterByNameQuery } =
  characterApi;
