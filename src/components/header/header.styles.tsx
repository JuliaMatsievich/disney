import styled from "styled-components"
import { $mainColor } from "../../styles/variables"
import { centralContainer } from "../../styles/commonStyles.styles"

export const HeaderHeader = styled.header`
  background: linear-gradient(225deg, rgb(37, 95, 191) 15%, rgb(6, 18, 56));
  width: 100%;
  margin-bottom: 30px;
`

export const HeaderContainer = styled.div`
  ${centralContainer}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 80px;
  color: #fff;
`

export const Img = styled.img`
  height: 70px;
`

export const Title = styled.div`
  font-size: 24px;
`
