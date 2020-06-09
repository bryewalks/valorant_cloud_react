import styled from 'styled-components'

export const SearchButton = styled.div`
  width: 60px;
  height: 55px;
  border: 1px solid ${ props => props.color ? props.color : '#00B4CC'};
  background: ${ props => props.color ? props.color : '#00B4CC'};
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    svg {
      fill: ${ props => props.hoverColor ? props.hoverColor : 'white'};
    }
  } 
`

export const SearchContainer = styled.div`
  width: ${ props => props.width ? props.width : '500px'};
  display: flex;
  margin: 5px;
  margin-left: auto;
`

export const SearchInput = styled.input`
  width: 100%;
  border: 3px solid ${ props => props.color ? props.color : '#00B4CC'};
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-size: 24px;
`