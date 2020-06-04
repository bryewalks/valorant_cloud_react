import React, { useState } from 'react'
import { ReactComponent as SearchIcon } from './images/search.svg'

import { SearchBar, SearchButton, SearchForm, SearchWrapper } from './style'

export const PlayerSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const SearchPlayers = () => {
    //do something with valorant API
  }

  return (
    <SearchWrapper>
      <SearchForm>
        <SearchBar 
          value={ searchTerm }
          onChange={ (e) => setSearchTerm(e.target.value) }
          placeholder='Search Players...'/>
        <SearchButton onClick={ SearchPlayers }>
          <SearchIcon height='30px' width='30px' />
        </SearchButton>
      </SearchForm>
    </SearchWrapper>
  )
}

export default PlayerSearch