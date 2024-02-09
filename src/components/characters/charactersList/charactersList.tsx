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
            <CharacterCard key={character._id} character={character} />
          ))}
        </S.ListContainer>
      </CS.Container>
    </>
  )
}
