import styled, {css} from 'styled-components'

export const InfoWrapper = styled.div`
  position: absolute;
  z-index: 999;
`

export const InfoContainer = styled.div`
  width: 750px;
  height: 90vh;
  transform: translate(-750px);
  background-color: white;
  transition: transform 1s ease-out;
  ${props => props.expanded && css`
    transform: translate(0px);
  `}
`