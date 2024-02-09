import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ICharacter } from "../../interface"

interface ICharactersState {
  characters: ICharacter[]
  favCharacters: ICharacter[]
  isFilter: boolean
}

export const initialState: ICharactersState = {
  characters: [],
  favCharacters: [],
  isFilter: false,
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

    setLike(state, action: PayloadAction<ICharacter>) {
      state.favCharacters.push(action.payload)
    },

    setDislike(state, action: PayloadAction<number>) {
      state.favCharacters = state.favCharacters.filter(
        ({ _id }) => _id !== action.payload,
      )
    },

    deleteCharacter(state, action: PayloadAction<number>) {
      state.characters = state.characters.filter(
        ({ _id }) => _id !== action.payload,
      )
      state.favCharacters = state.favCharacters.filter(
        ({ _id }) => _id !== action.payload,
      )
    },

    setFilter(state) {
      state.isFilter = !state.isFilter
    },
  },
})

export const {
  getAllCharacters,
  setLike,
  setDislike,
  deleteCharacter,
  setFilter,
} = charactersSlice.actions
export const charactersReducer = charactersSlice.reducer
