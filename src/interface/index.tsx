export interface IDisneyCharacters {
  info: {
    count: number
    totalPages: number
    previousPage: string | null
    nextPage: string | null
  }
  data: ICharacter[]
}

export interface ICharacter {
  _id: number
  films: string[]
  shortFilms: string[]
  tvShows: string[]
  videoGames: string[]
  parkAttractions: []
  allies: string[]
  enemies: string[]
  sourceUrl: string
  name: string
  imageUrl: string
  createdAt: string
  updatedAt: string
  url: string
  __v: number
}
