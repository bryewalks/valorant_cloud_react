import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from './images/search.svg'

import { SearchContainer, SearchButton, SearchInput } from './style'

const SearchBar = ({ color, hoverColor, width }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [placeholder, setPlaceholder] = useState('Search Players...')

  const searchPlayers = () => {
    let searchedPlayers = []
    //do something with valorant API
    if (searchedPlayers.length === 0) {
      setSearchTerm('')
      setPlaceholder('No Results')
    }
  }

  return (
    <SearchContainer width={ width }>
      <SearchInput
        value={ searchTerm }
        onChange={ (e) => setSearchTerm(e.target.value) }
        placeholder={ placeholder }
        color={ color }/>
      <SearchButton 
        onClick={ searchPlayers } 
        color={ color }
        hoverColor={ hoverColor }>
        <SearchIcon height='30px' width='30px' />
      </SearchButton>
    </SearchContainer>
  )
}

export default SearchBar