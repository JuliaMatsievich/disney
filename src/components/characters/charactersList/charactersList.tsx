import * as S from "./charactersList.styles"
import * as CS from "../../../styles/commonStyles.styles"

import { CharacterCard } from "../characterCard/characterCard"
import { useAppSelector } from "../../../hooks/useAppSelector"

export const CharacersList: React.FC = () => {
  const characters = useAppSelector(state => state.characters.characters)

  return (
    <>
      <CS.Container>
        <S.ListContainer>
          {characters.map(character => (
            <S.CardLink to={`/character/${character._id}`}>
              <CharacterCard key={character._id} character={character} />
            </S.CardLink>
          ))}
        </S.ListContainer>
      </CS.Container>
    </>
  )
}
