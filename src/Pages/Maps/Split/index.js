import React from 'react'

import splitMap from './images/split-map.svg'
import splitCalls from './images/split-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { ButtonContainer, Title } from '../style'

export const Split = ({ history }) => {
  return (
    <div>
      <Title>Split</Title>
      <ButtonContainer>
        <button onClick={ () => history.push('/bind')}>Bind</button>
        <button onClick={ () => history.push('/haven')}>Haven</button>
      </ButtonContainer>
      <ValorantMap mapSrc={ splitMap } callsSrc={ splitCalls } mapId={ 3 }/>
    </div>
  )
}

export default Split