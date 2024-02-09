import { useDispatch } from "react-redux"
import * as S from "./buttonFilter.styles"
import { setFilter } from "../../../store/slices/charactersSlice"
import { useAppSelector } from "../../../hooks/useAppSelector"

export const ButtonFilter: React.FC = () => {
  const dispatch = useDispatch()
  const isFilter = useAppSelector(state => state.characters.isFilter)

  const handleClickFilter = () => {
    dispatch(setFilter())
  }

  return (
    <>
      <S.ButtonContainer>
        <S.Button onClick={handleClickFilter}>
          {isFilter
            ? "Показать всех персонажей"
            : "Показать любимых персонажей"}
        </S.Button>
      </S.ButtonContainer>
    </>
  )
}
