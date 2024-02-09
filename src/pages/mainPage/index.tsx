import { useGetAllCharactersQuery } from "../../services/disneyCharactersApi"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useEffect } from "react"
import { CharactersList } from "../../components/characters/charactersList/charactersList"
import { getAllCharacters } from "../../store/slices/charactersSlice"
import { ButtonFilter } from "../../components/buttonFilter/buttonFilter"

export const MainPage = () => {
  const { data, isLoading, isSuccess, isError } = useGetAllCharactersQuery(null)
  const dispatch = useAppDispatch()

  useEffect(() => {
    isSuccess && dispatch(getAllCharacters({ characters: data.data }))
  }, [data, isSuccess])

  return (
    <>
      {isLoading ? (
        <div>Загрузка...</div>
      ) : (
        <>
          <ButtonFilter />
          <CharactersList />
        </>
      )}
      {isError && <div>Произошла какая-то ошибка, попробуйте позже...</div>}
    </>
  )
}
