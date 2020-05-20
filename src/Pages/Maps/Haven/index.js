import React from 'react'

import havenMap from './images/haven-map.svg'
import havenCalls from './images/haven-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { ButtonContainer, Title } from '../style'

export const Haven = ({ history }) => {
  return (
    <div>
      <Title>Haven</Title>
      <ButtonContainer>
        <button onClick={ () => history.push('/bind')}>Bind</button>
        <button onClick={ () => history.push('/split')}>Split</button>
      </ButtonContainer>
      <ValorantMap mapSrc={ havenMap } callsSrc={ havenCalls } mapId={ 2 } />
    </div>
  )
}

export default Haven