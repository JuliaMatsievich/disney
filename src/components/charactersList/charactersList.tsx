import * as S from "./charactersList.styles"
import * as CS from "../../styles/commonStyles.styles"

import { CharacterCard } from "../characterCard/characterCard"

export const CharacersList: React.FC = () => {
  return (
    <>
      <CS.Container>
        <S.ListContainer>
          <CharacterCard />
        </S.ListContainer>
      </CS.Container>
    </>
  )
}
