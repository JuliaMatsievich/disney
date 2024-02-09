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
          <S.CDName>{character.name}</S.CDName>

          {character.films.length > 0 ? (
            <>
              <S.CDTextConatiner>
                <S.CDSubtitle>Фильмы: </S.CDSubtitle>
                <S.CDList>
                  {character.films.map((film, index) => (
                    <S.CDListItem key={index + 10}>{film}</S.CDListItem>
                  ))}
                </S.CDList>
              </S.CDTextConatiner>
            </>
          ) : null}

          {character.tvShows.length > 0 ? (
            <>
              <S.CDTextConatiner>
                <S.CDSubtitle>ТВ-шоу: </S.CDSubtitle>
                <S.CDList>
                  {character.tvShows.map((tvshow, index) => (
                    <S.CDListItem key={index + 20}>{tvshow}</S.CDListItem>
                  ))}
                </S.CDList>
              </S.CDTextConatiner>
            </>
          ) : null}

          {character.sourceUrl ? (
            <S.CDTextConatiner>
              <S.CDSubtitle>Фандом: </S.CDSubtitle>
              <S.CDLink to={character.sourceUrl} target="_blank">
                <S.CDText>{character.sourceUrl}</S.CDText>
              </S.CDLink>
            </S.CDTextConatiner>
          ) : null}
        </S.CDContentContainer>
      </S.CharacterDetailedContainer>
    </>
  )
}
