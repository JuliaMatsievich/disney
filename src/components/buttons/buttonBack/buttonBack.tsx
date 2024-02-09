import * as S from "./buttonBack.styles"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export const ButtonBack: React.FC = () => {
  return (
    <>
      <S.ButtonContainer>
        <S.ButtonLink to={"/"}>
          <S.Button>
            <ArrowBackIcon
              sx={{
                marginRight: "10px",
              }}
            />
            Назад к общему списку
          </S.Button>
        </S.ButtonLink>
      </S.ButtonContainer>
    </>
  )
}
