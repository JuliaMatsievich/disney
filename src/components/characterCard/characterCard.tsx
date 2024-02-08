import * as S from "./characterCard.styles"

export const CharacterCard: React.FC = () => {
  return (
    <>
      <S.CardContainer>
        <S.CardImageContainer>
          <S.CardImage />
        </S.CardImageContainer>
        <S.CardTitle></S.CardTitle>
      </S.CardContainer>
    </>
  )
}
