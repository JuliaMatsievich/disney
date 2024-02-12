import { configureStore } from "@reduxjs/toolkit"
import { disneyCharactersApi } from "../services/disneyCharactersApi"
import { charactersReducer } from "./slices/charactersSlice"

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    [disneyCharactersApi.reducerPath]: disneyCharactersApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(disneyCharactersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
