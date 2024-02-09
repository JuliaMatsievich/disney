// import * as S from "./CharacterDetailedPage.styles"

import { useParams } from "react-router-dom"
import { CharacterDetailed } from "../../components/characters/characterDetailed/characterDetailed"
import { useGetCharacterByIdQuery } from "../../services/disneyCharactersApi"

export const CharacterDetailedPage: React.FC = () => {
  const params = useParams()
  const characterId = Number(params.id)
  const { data: character, isLoading } = useGetCharacterByIdQuery(characterId)

  return (
    <>
      {isLoading || character === undefined ? (
        <div>Загрузка...</div>
      ) : (
        <CharacterDetailed character={character.data} />
      )}
    </>
  )
}
