import React from 'react'
import { useHistory } from 'react-router-dom'

import SearchBar from 'Components/SearchBar'

import { Container, Title } from './style'

export const NavBar = () => {
  const history = useHistory()
  
  return (
    <Container>
      <Title onClick={() => history.push("/") }>Valorant Cloud</Title>
      <SearchBar />
    </Container>
  )
}

export default NavBar