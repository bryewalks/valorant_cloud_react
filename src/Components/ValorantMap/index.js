import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import smokeImage from './images/smoke.svg'
import wallImage from './images/wall.svg'

import { MapImages, MapImage, MapContainer, SmokeMarker, WallMarker } from './style'

export const ValorantMap = ({ mapSrc, callsSrc}) => {
  const [walls, setWalls] = useState([])
  const [smokes, setSmokes] = useState([])
  const [addingMarker, setAddingMarker] = useState('')
  const [wallStart, setWallStart] = useState({})

  const handleMapClick = (e) => {
    switch (addingMarker) {
      case 'smoke':
          setSmokes(smokes.concat({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
          }))
          break
      case 'wall':
          setWallStart({
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY
          })
          setAddingMarker('wallAngle')
          return
      case 'wallAngle':
          let angle = findAngle(wallStart.x, wallStart.y, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          setWalls(walls.concat({
            x: wallStart.x,
            y: wallStart.y,
            angle: angle
          }))
          setWallStart({})
          break
      default:
          return
    }
    setAddingMarker('') 
  }

  const findAngle = (sx, sy, ex, ey) => {
    let dy = ey - sy
    let dx = ex - sx
    let theta = Math.atan2(dy, dx)
    theta *= 180 / Math.PI
    return theta
  }

  return (
    <TransformWrapper>
      <MapContainer 
        onMouseDown={ handleMapClick }
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
              y={ wall.y }
              angle={ wall.angle } />)}
          { wallStart.x &&
            <WallMarker 
              src={ wallImage } 
              x={ wallStart.x } 
              y={ wallStart.y }
              angle={ 0 }
            />
          }
        </TransformComponent>
      </MapContainer>
    </TransformWrapper>
  )
}

export default ValorantMap