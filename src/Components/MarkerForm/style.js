import styled, { css } from 'styled-components'

export const FormWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;
  overflow: hidden;
`

export const FormContainer = styled.div`
  width: 0px;
  height: 75vh;
  border-radius: 20px 0 0 20px;
  background-color: white;
  transform: translate(750px);
  transition: transform 1s ease-out;
  ${props => props.expanded && css`
    width: 25vw;
    transform: translate(0px);
  `}
`
