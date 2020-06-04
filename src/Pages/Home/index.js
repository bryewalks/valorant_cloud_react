import React from 'react'
import { useHistory } from 'react-router-dom'

import PlayerSearch from 'Components/PlayerSearch'

export const Home = (props) => {
  const history = useHistory()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => history.push('bind')}>Bind</button>
      <button onClick={ () => history.push('haven')}>Haven</button>
      <button onClick={ () => history.push('split')}>Split</button>
      <PlayerSearch />
    </div>
  )
}

export default Home