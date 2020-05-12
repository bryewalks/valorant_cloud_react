import React from 'react'

import havenMap from './images/haven-map.svg'
import havenCalls from './images/haven-calls.svg'
import { MapContainer, MapImage } from '../style'

export const Haven = (props) => {
  return (
    <div>
      <h1>Haven</h1>
      <MapContainer>
        <MapImage src={ havenMap } alt='haven map' />
        <MapImage src={ havenCalls } alt='haven calls' />
      </MapContainer>
    </div>
  )
}

export default Haven