import React from 'react'
import { useHistory } from 'react-router-dom'

export const Home = (props) => {
  const history = useHistory()

  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => history.push('bind')}>Bind</button>
      <button onClick={ () => history.push('haven')}>Haven</button>
      <button onClick={ () => history.push('split')}>Split</button>
    </div>
  )
}

export default Home