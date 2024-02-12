import styled from "styled-components"
import {
  buttonColor,
  centralContainer,
  link,
} from "../../../styles/commonStyles.styles"
import { Link } from "react-router-dom"

export const ButtonContainer = styled.div`
  ${centralContainer}
  margin-bottom: 30px;
`
export const Button = styled.button`
  ${buttonColor}
  justify-content: space-between;
`
export const ButtonLink = styled(Link)`
  ${link}
`
