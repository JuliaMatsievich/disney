import * as CS from "../../styles/commonStyles.styles"
import * as S from "./index.styles"

import { Header } from "../../components/header/header"
import {
  useGetAllCharactersQuery,
  useLazyGetAllCharactersQuery,
} from "../../services/disneyCharactersApi"
import { useAppDispatch } from "../../app/hooks"
import { useEffect } from "react"
import { CharacersList } from "../../components/charactersList/charactersList"
import { getAllCharacters } from "../../store/slices/charactersSlice"

export const MainPage = () => {
  const { data, isLoading, isSuccess } = useGetAllCharactersQuery(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isSuccess && dispatch(getAllCharacters({ characters: data.data }))
  }, [data, isSuccess])

  return (
    <>
      <Header />
      <CS.Container>
        <S.TitleMain>Персонажи Дисней</S.TitleMain>
        {isLoading ? <div>Загрузка...</div> : <CharacersList />}
      </CS.Container>
    </>
  )
}
