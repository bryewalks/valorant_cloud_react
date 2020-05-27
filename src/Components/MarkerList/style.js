import styled, { css } from 'styled-components'

export const MarkersContainer = styled.div`
  background-color: #707070;
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

export const MarkersTable = styled.table`
  text-align: center;
  border-collapse: collapse;
  tr {
    height: 40px;
    background-color: #707070;
  }
  tr:nth-child(odd) {
    background-color: #505050;
  }
  th {
    width: 100%;
    background-color: #252627;
    color: white;
    :first-child {
      width: 50px;
    }
  }
`

export const MarkerRow = styled.tr`
  ${props => props.selected && css`
    color: white;
  `}
`