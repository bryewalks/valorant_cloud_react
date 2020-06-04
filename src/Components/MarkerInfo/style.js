import styled, {css} from 'styled-components'

export const InfoWrapper = styled.div`
  position: absolute;
  z-index: 999;
`

export const InfoContainer = styled.div`
  width: 0px;
  height: 75vh;
  border-radius: 0 20px 20px 0;
  transform: translate(-750px);
  background-color: white;
  transition: transform 1s ease-out;
  ${props => props.expanded && css`
    width: 25vw;
    transform: translate(0px);
  `}
`