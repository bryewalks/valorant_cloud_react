import React from 'react'

import splitMap from './images/split-map.svg'
import splitCalls from './images/split-calls.svg'

import ValorantMap from 'Components/ValorantMap'
import { Title } from '../style'

export const Split = (props) => {
  return (
    <div>
      <Title>Split</Title>
      <ValorantMap mapSrc={ splitMap } callsSrc={ splitCalls } />
    </div>
  )
}

export default Split