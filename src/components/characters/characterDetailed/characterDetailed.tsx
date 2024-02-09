import { ICharacter } from "../../../interface"
import * as S from "./characterDetailed.styles"

interface ICharacterDetailedProps {
  character: ICharacter
}

export const CharacterDetailed: React.FC<ICharacterDetailedProps> = props => {
  const { character } = props

  return (
    <>
      <S.CharacterDetailedContainer>
        <S.CDImageContainer>
          <S.CDImage src={character.imageUrl} />
        </S.CDImageContainer>
        <S.CDContentContainer>
          <S.CDSubtitleName>Имя персонажа</S.CDSubtitleName>
          <S.CDTextName>{character.name}</S.CDTextName>
        </S.CDContentContainer>
      </S.CharacterDetailedContainer>
    </>
  )
}
