import React from 'react'
import charactersImage from './images/Valorant.jpg'

import SearchBar from 'Components/SearchBar'

import { SearchForm, SearchFormImage, SearchWrapper } from './style'

export const PlayerSearch = () => {

  return (
    <SearchWrapper>
      <SearchFormImage src={ charactersImage } alt='valorant characters' />
      <SearchForm>
        <SearchBar />
      </SearchForm>
    </SearchWrapper>
  )
}

export default PlayerSearch