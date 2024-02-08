import * as S from "./header.styles"
import * as CS from "../../styles/commonStyles.styles"

export const Header: React.FC = () => {
  return (
    <>
      <S.HeaderHeader>
        <CS.Container>
          <S.HeaderContainer>
            <S.Img src="/img/Disney-logo-white-png.png"></S.Img>
            <S.Title>&nbsp;characters</S.Title>
          </S.HeaderContainer>
        </CS.Container>
      </S.HeaderHeader>
    </>
  )
}
