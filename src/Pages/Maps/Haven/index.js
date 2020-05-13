import React from 'react'

import havenMap from './images/haven-map.svg'
import havenCalls from './images/haven-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { Title } from '../style'

export const Haven = (props) => {
  return (
    <div>
      <Title>Haven</Title>
      <ValorantMap mapSrc={ havenMap } callsSrc={ havenCalls } />
    </div>
  )
}

export default Haven