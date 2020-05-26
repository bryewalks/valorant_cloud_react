import styled, { css } from 'styled-components'

export const MarkersContainer = styled.div`
  background-color: white;
  margin: 20px auto;
  height: 500px;
  width: 1000px;
  overflow-y: scroll;
`

export const MarkerListItem = styled.div`
  height: 50px;
  ${props => props.selected && css`
    background-color: gray;
  `}
`

export const RemoveButton = styled.button`
`