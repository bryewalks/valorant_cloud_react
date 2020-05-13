import React from 'react'

import bindMap from './images/bind-map.svg'
import bindCalls from './images/bind-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { Title } from '../style'

export const Bind = (props) => {
  return (
    <div>
      <Title>Bind</Title>
      <ValorantMap mapSrc={ bindMap } callsSrc={ bindCalls } />
    </div>
  )
}

export default Bind