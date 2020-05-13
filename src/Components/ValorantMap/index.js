import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import smokeImage from './images/smoke.svg'
import wallImage from './images/wall.svg'

import { MapImages, MapImage, MapContainer, SmokeMarker, WallMarker } from './style'

export const ValorantMap = ({ mapSrc, callsSrc}) => {
  const [walls, setWalls] = useState([])
  const [smokes, setSmokes] = useState([])
  const [addingMarker, setAddingMarker] = useState('')

  const handleMapClick = (e) => {
    switch (addingMarker) {
      case 'smoke':
          setSmokes(smokes.concat({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
          }))
          break
      case 'wall':
          setWalls(walls.concat({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
          }))
          return
      default:
          return
    }
    setAddingMarker('') 
  }

  const handleMapUpClick = (e) => {
    console.log(e.nativeEvent.offsetY)
    if (addingMarker === 'wall') {
      //Find angle between downclick and upclick
    }
  }

  return (
    <TransformWrapper>
      <MapContainer 
        onMouseDown={ handleMapClick } 
        onMouseUp={ handleMapUpClick } 
        addingMarker={ addingMarker }>
        <button onClick={() => setAddingMarker('smoke')}>Add Smoke</button>
        <button onClick={() => setAddingMarker('wall')}>Add Wall</button>
        <TransformComponent>
          <MapImages>
            <MapImage src={ mapSrc } alt='haven map' />
            <MapImage src={ callsSrc } alt='haven calls' />
          </MapImages>
          { smokes.map((smoke, index) => 
            <SmokeMarker
              onClick={ () => {
                                console.log('x:', smoke.x)
                                console.log('y:', smoke.y)
                              }}
              key={ index }
              src={ smokeImage } 
              x={ smoke.x } 
              y={ smoke.y }/>)}
          { walls.map((wall, index) => 
            <WallMarker
              onClick={ () => {
                                console.log('x:', wall.x)
                                console.log('y:', wall.y)
                              }}
              key={ index }
              src={ wallImage } 
              x={ wall.x } 
              y={ wall.y }/>)}
        </TransformComponent>
      </MapContainer>
    </TransformWrapper>
  )
}

export default ValorantMap