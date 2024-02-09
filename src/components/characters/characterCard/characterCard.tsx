import { truncate } from "../../../helpers/trancateFunc"
import { ICharacter } from "../../../interface"
import * as S from "./characterCard.styles"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { useAppDispatch } from "../../../hooks/useAppDispatch"
import { useState } from "react"
import { setDislike, setLike } from "../../../store/slices/charactersSlice"

interface ICharacterCardProps {
  character: ICharacter
}

export const CharacterCard: React.FC<ICharacterCardProps> = props => {
  const { character } = props

  const dispatch = useAppDispatch()

  const [isLike, setIsLike] = useState<boolean>(false)

  const handleClickLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(setLike(character))
    setIsLike(true)
  }

  const handleClickDislike = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => {
    e.preventDefault()
    dispatch(setDislike(character._id))
    setIsLike(false)
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
            {isLike ? (
              <FavoriteIcon
                sx={[
                  { color: "#4781df", cursor: "pointer" },
                  {
                    "&:hover": {
                      color: "#1e5cc0",
                    },
                  },
                ]}
                onClick={e => handleClickDislike(e)}
              />
            ) : (
              <FavoriteBorderIcon
                sx={[
                  { color: "#4781df", cursor: "pointer" },
                  {
                    "&:hover": {
                      color: "#1e5cc0",
                    },
                  },
                ]}
                onClick={e => handleClickLike(e)}
              />
            )}

            <DeleteForeverIcon
              sx={[
                { color: "#4781df", cursor: "pointer" },
                {
                  "&:hover": {
                    color: "#1e5cc0",
                  },
                },
              ]}
              onClick={e => handleClickDelete(e)}
            />
          </S.CardContainerButtons>
        </S.CardContentContainer>
      </S.CardContainer>
    </>
  )
}
