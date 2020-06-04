import styled from 'styled-components'

export const SearchBar = styled.input`
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  font-size: 24px;
`

export const SearchButton = styled.div`
  width: 60px;
  height: 55px;
  border: 1px solid #00B4CC;
  background: #00B4CC;
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
      fill: white;
    }
  } 
`

export const SearchForm = styled.div`
  width: 60%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`

export const SearchWrapper = styled.div`
  background-color: black;
  border-radius: 20px;
  position: fixed;
  height: 500px;
  width: 50vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
