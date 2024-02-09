import styled from "styled-components"
import { centralContainer, img } from "../../../styles/commonStyles.styles"
import { $mainColor, $titleColor } from "../../../styles/variables"
import { Link } from "react-router-dom"

export const CharacterDetailedContainer = styled.div`
  ${centralContainer}
  display: flex;
  gap: 80px;
`

export const CDImageContainer = styled.div`
  width: 400px;
  border: 3px solid ${$mainColor};
  border-radius: 10px;
  overflow: hidden;
`

export const CDImage = styled.img`
  height: 100%;
  width: 100%;
`

export const CDContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CDSubtitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`

export const CDText = styled.span`
  font-size: 20px;
  font-weight: 400;
`

export const CDName = styled.h1`
  font-size: 40px;
  color: ${$titleColor};
`

export const CDSubtitleFilms = styled(CDSubtitle)``

export const CDList = styled.ul``

export const CDListItem = styled.li`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const CDTextConatiner = styled.div`
  display: flex;
  gap: 20px;
  align-items: baseline;
  justify-content: flex-start;
`

export const CDLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: #000;

  &:hover {
    color: #1851bb;
    font-weight: 600;
  }
  &:visited {
    text-decoration: none;
    color: #000;
  }
`
