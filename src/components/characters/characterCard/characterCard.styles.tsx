import styled from "styled-components"
import { img } from "../../../styles/commonStyles.styles"
import { $titleColor } from "../../../styles/variables"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.11);
  padding: 15px 15px 45px 15px;
  border-radius: 10px;
  cursor: pointer;
`

export const CardImageContainer = styled.div`
  position: relative;
  height: 270px;
  width: 240px;
  margin-bottom: 20px;
  border-radius: 10px;
`

export const CardImage = styled.img`
  ${img}
  border-radius: 10px;
`
export const CardContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardTitle = styled.div`
  font-size: 22px;
  color: ${$titleColor};
  font-weight: 600;
`

export const CardContainerButtons = styled.div`
  display: flex;
  gap: 15px;
`
