import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { IDisneyCharacters, IDisneyOneCharacter } from "../interface"
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

    getCharacterById: builder.query<IDisneyOneCharacter, number>({
      query: id => ({
        url: `/character/${id}`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useGetAllCharactersQuery,
  useLazyGetAllCharactersQuery,
  useGetCharacterByIdQuery,
} = disneyCharactersApi
