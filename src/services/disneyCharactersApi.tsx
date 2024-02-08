import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { IDisneyCharacters } from "../interface"
import { BASE_URL } from "../constants/url"

export const disneyCharactersApi = createApi({
  reducerPath: "disneyCharactersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getAllCharacters: builder.query<IDisneyCharacters, null>({
      query: () => ({
        url: `/character`,
        method: "GET",
      }),
    }),
  }),
})

export const { useGetAllCharactersQuery, useLazyGetAllCharactersQuery } =
  disneyCharactersApi
