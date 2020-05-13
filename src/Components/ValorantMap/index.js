import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import smokeImage from './images/smoke.svg'

import { MapImages, MapImage, MapContainer, MapMarker } from './style'

export const ValorantMap = ({ mapSrc, callsSrc}) => {
  const [markers, setMarkers] = useState([])
  const [addingSmoke, setAddingSmoke] = useState(false)

  const handleMapClick = (e) => {
    if (addingSmoke) {
      setMarkers(markers.concat({
                                  x: e.nativeEvent.offsetX,
                                  y: e.nativeEvent.offsetY
                                }))
      setAddingSmoke(false)                          
    }
  }

  return (
    <TransformWrapper>
      <MapContainer 
        onClick={ handleMapClick } 
        addingSmoke={ addingSmoke }>
        <button onClick={() => setAddingSmoke(true)}>Add Smoke</button>
        <TransformComponent>
          <MapImages>
            <MapImage src={ mapSrc } alt='haven map' />
            <MapImage src={ callsSrc } alt='haven calls' />
            { markers.map((marker, index) => 
              <MapMarker
                key={ index }
                src={ smokeImage } 
                alt='smoke'
                x={ marker.x } 
                y={ marker.y }/>)}
          </MapImages>
        </TransformComponent>
      </MapContainer>
    </TransformWrapper>
  )
}

export default ValorantMap
