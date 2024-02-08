import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICharacter } from "../../interface"

interface ICharactersState {
  characters: ICharacter[]
}

export const initialState: ICharactersState = {
  characters: [],
}

export const charactersSlice = createSlice({
  name: "characters",
  initialState: initialState,
  reducers: {
    getAllCharacters(
      state,
      action: PayloadAction<{ characters: ICharacter[] }>,
    ) {
      state.characters = action.payload.characters
    },
  },
})

export const { getAllCharacters } = charactersSlice.actions
export const charactersReducer = charactersSlice.reducer
