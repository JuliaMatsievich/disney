import * as S from "./charactersList.styles"
import * as CS from "../../../styles/commonStyles.styles"

import { CharacterCard } from "../characterCard/characterCard"
import { useAppSelector } from "../../../hooks/useAppSelector"
import { useEffect, useState } from "react"
import { ICharacter } from "../../../interface"

export const CharactersList: React.FC = () => {
  const characters = useAppSelector(state => state.characters.characters)
  const favCharacters = useAppSelector(state => state.characters.favCharacters)
  const isFilter = useAppSelector(state => state.characters.isFilter)
  const [characterList, setCharacterList] = useState<ICharacter[]>(characters)

  useEffect(() => {
    if (isFilter) {
      setCharacterList(favCharacters)
    } else {
      setCharacterList(characters)
    }
  }, [isFilter, characterList, favCharacters, characters])

  return (
    <>
      <CS.Container>
        <S.ListContainer>
          {characterList.map(character => (
            <S.CardLink to={`/character/${character._id}`} key={character._id}>
              <CharacterCard character={character} />
            </S.CardLink>
          ))}
          {isFilter && characterList.length === 0 && (
            <div>У вас пока нет любимых персонажей</div>
          )}
        </S.ListContainer>
      </CS.Container>
    </>
  )
}
