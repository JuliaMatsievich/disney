import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICharacter } from "../../interface"

interface ICharactersState {
  characters: ICharacter[]
  favCharacters: ICharacter[]
}

export const initialState: ICharactersState = {
  characters: [],
  favCharacters: [],
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

    setLike(state, action) {
      state.favCharacters.push(action.payload)
    },

    setDislike(state, action) {
      console.log(action.payload)
      state.favCharacters = state.favCharacters.filter(
        ({ _id }) => _id !== action.payload,
      )
    },
  },
})

export const { getAllCharacters, setLike, setDislike } = charactersSlice.actions
export const charactersReducer = charactersSlice.reducer
