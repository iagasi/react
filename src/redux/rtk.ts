import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../constants';
import { userType } from 'types/userType';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
type responseUsersType = {
  results: userType[];
};

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
      });
      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      console.clear();

      return { error: { status: 200, data: err.response?.data } };
    }
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
  baseQuery: axiosBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    getCharacters: builder.query<responseUsersType, string>({
      query: () => ({ url: 'character', method: 'GET' }),
    }),
    getCharacterById: builder.query<userType, string>({
      query: (id) => ({ url: `character/${id}`, method: 'GET' }),
    }),
    getCharacterByName: builder.query<responseUsersType, string>({
      query: (name) => ({
        url: handleUrl(name),
        method: 'Get',
        // validateStatus: (response, result) => {
        //   if (response.status === 404) {
        //     return false;
        //   } else {
        //     return response.status === 200 && !result.isError;
        //   }
        // },
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery, useGetCharacterByNameQuery } =
  characterApi;
