import React from 'react'

import bindMap from './images/bind-map.svg'
import bindCalls from './images/bind-calls.svg'
import { MapContainer, MapImage } from '../style'

export const Bind = (props) => {
  return (
    <div>
      <h1>Bind</h1>
      <MapContainer>
        <MapImage src={ bindMap } alt='bind map' />
        <MapImage src={ bindCalls } alt='bind calls' />
      </MapContainer>
    </div>
  )
}

export default Bind