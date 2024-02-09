import styled from "styled-components"
import { centralContainer } from "../../../styles/commonStyles.styles"
import { Link } from "react-router-dom"

export const CardLink = styled(Link)`
  text-decoration: none;
`

export const ListContainer = styled.div`
  ${centralContainer}
  display: flex;
  flex-wrap: wrap;
  column-gap: 60px;
  row-gap: 50px;
  justify-content: flex-start;
  margin-bottom: 50px;
`
