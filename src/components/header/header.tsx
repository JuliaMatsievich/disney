import * as S from "./header.styles"
import * as CS from "../../styles/commonStyles.styles"

export const Header: React.FC = () => {
  return (
    <>
      <S.HeaderHeader>
        <CS.Container>
          <S.HeaderContainer>
            <S.Img src="/disney/img/Disney-logo-white-png.png"></S.Img>
          </S.HeaderContainer>
        </CS.Container>
      </S.HeaderHeader>
    </>
  )
}
