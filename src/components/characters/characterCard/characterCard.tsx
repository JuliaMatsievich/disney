import { truncate } from "../../../helpers/trancateFunc"
import { ICharacter } from "../../../interface"
import * as S from "./characterCard.styles"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

interface ICharacterCardProps {
  character: ICharacter
}

export const CharacterCard: React.FC<ICharacterCardProps> = props => {
  const { character } = props

  const handleClickLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()
  }

  const handleClickDelete = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    e.preventDefault()
  }

  return (
    <>
      <S.CardContainer>
        <S.CardImageContainer>
          <S.CardImage src={character.imageUrl} />
        </S.CardImageContainer>
        <S.CardContentContainer>
          <S.CardTitle>{truncate(character.name, 12)}</S.CardTitle>
          <S.CardContainerButtons>
            <FavoriteBorderIcon
              sx={{ color: "#4781df", cursor: "pointer" }}
              onClick={e => handleClickLike(e)}
            />
            <DeleteForeverIcon
              sx={{ color: "#4781df", cursor: "pointer" }}
              onClick={e => handleClickDelete(e)}
            />
          </S.CardContainerButtons>
        </S.CardContentContainer>
      </S.CardContainer>
    </>
  )
}
