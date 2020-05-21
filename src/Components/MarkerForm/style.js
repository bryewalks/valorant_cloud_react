import styled, { css } from 'styled-components'

export const FormWrapper = styled.div`
  position: absolute;
  right: 0;
  z-index: 999;
  overflow: hidden;
`

export const FormContainer = styled.div`
  width: 750px;
  height: 90vh;
  /* float: right; */
  background-color: white;
  transform: translate(750px);
  transition: transform 1s ease-out;
  ${props => props.expanded && css`
    transform: translate(0px);
  `}
`
