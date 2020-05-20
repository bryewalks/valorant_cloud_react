import React from 'react'

import bindMap from './images/bind-map.svg'
import bindCalls from './images/bind-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { ButtonContainer, Title } from '../style'

export const Bind = ({ history }) => {
  return (
    <div>
      <Title>Bind</Title>
      <ButtonContainer>
        <button onClick={ () => history.push('/haven')}>Haven</button>
        <button onClick={ () => history.push('/split')}>Split</button>
      </ButtonContainer>
      <ValorantMap mapSrc={ bindMap } callsSrc={ bindCalls } mapId={ 1 } />
    </div>
  )
}

export default Bind