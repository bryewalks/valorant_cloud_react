import React from 'react'

import bindMap from './images/bind-map.svg'
import bindCalls from './images/bind-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { ButtonContainer, Title } from '../style'

export const Bind = ({ history }) => {
  const bindMapId = 1

  return (
    <div>
      <Title>Bind</Title>
      <ButtonContainer>
        <button onClick={ () => history.push('/haven')}>Haven</button>
        <button onClick={ () => history.push('/split')}>Split</button>
      </ButtonContainer>
      <ValorantMap mapSrc={ bindMap } callsSrc={ bindCalls } mapId={ bindMapId } />
    </div>
  )
}

export default Bind