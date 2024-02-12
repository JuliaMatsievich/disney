import styled from "styled-components"
import { centralContainer } from "../../styles/commonStyles.styles"

export const HeaderHeader = styled.header`
  background: linear-gradient(225deg, rgb(37, 95, 191) 15%, rgb(6, 18, 56));
  background-image: url(/img/istockphoto-1227029805-170667a.jpg);
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
  height: 65px;
`
