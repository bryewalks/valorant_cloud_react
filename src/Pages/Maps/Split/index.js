import React from 'react'

import splitMap from './images/split-map.svg'
import splitCalls from './images/split-calls.svg'
import { MapContainer, MapImage } from '../style'

export const Split = (props) => {
  return (
    <div>
      <h1>Split</h1>
      <MapContainer>
        <MapImage src={ splitMap } alt='split map' />
        <MapImage src={ splitCalls } alt='split calls' />
      </MapContainer>
    </div>
  )
}

export default Split