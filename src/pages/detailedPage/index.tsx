import { useParams } from "react-router-dom"
import { CharacterDetailed } from "../../components/characters/characterDetailed/characterDetailed"
import { useGetCharacterByIdQuery } from "../../services/disneyCharactersApi"
import { ButtonBack } from "../../components/buttons/buttonBack/buttonBack"

export const CharacterDetailedPage: React.FC = () => {
  const params = useParams()
  const characterId = Number(params.id)
  const { data: character, isLoading } = useGetCharacterByIdQuery(characterId)

  return (
    <>
      {isLoading || character === undefined ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <ButtonBack />
          <CharacterDetailed character={character.data} />
        </>
      )}
    </>
  )
}
