import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import smokeImage from './images/smoke.svg'
import wallImage from './images/wall.svg'
import MarkerInfo from 'Components/MarkerInfo'
import MarkerList from 'Components/MarkerList'
import MarkerForm from 'Components/MarkerForm'

import { MapImages, MapImage, MapContainer, SmokeMarker, WallMarker } from './style'

const findAngle = (sx, sy, ex, ey) => {
  let dy = ey - sy
  let dx = ex - sx
  let theta = Math.atan2(dy, dx)
  theta *= 180 / Math.PI
  return theta
}

export const ValorantMap = ({ mapId, mapSrc, callsSrc}) => {
  const [markers, setMarkers] =  useState([])
  const [addingMarker, setAddingMarker] = useState('')
  const [wallStart, setWallStart] = useState({})
  const [selectedMarker, setSelectedMarker] = useState({})
  const [showingMarkerInfo, setShowingMarkerInfo] = useState(false)

  useEffect(() => {
    axios
      .get(`/api/valorant_maps/${ mapId }`)
      .then(response => {
        setMarkers(response.data.locations)
      })
      .catch((error) => {
        console.error(error)
    });
  }, [mapId])

  const addMarker = (location) => {
    axios
      .post("/api/locations/", {location})
      .then(response => {
        setMarkers(markers.concat(response.data))
      })
      .catch((error) => {
        console.error(error)
    });
  }

  const removeMarker = (location) => {
    axios
      .delete(`/api/locations/${ location.id }`)
      .then(response => setMarkers(markers.filter(marker => marker.id !== location.id)))
      .catch((error) => {
        console.error(error)
    });
  }

  const handleMapClick = (e) => {
    switch (addingMarker) {
      case 'smoke':
          addMarker({
                      valorant_map_id: mapId,
                      character_id: 1,
                      x_axis: e.nativeEvent.offsetX,
                      y_axis: e.nativeEvent.offsetY,
                      location_type: 'smoke'
          })
          break
      case 'wall':
          setWallStart({
            x_axis: e.nativeEvent.offsetX,
            y_axis: e.nativeEvent.offsetY
          })
          setAddingMarker('wallAngle')
          return
      case 'wallAngle':
          let angle = findAngle(wallStart.x_axis, wallStart.y_axis, e.nativeEvent.offsetX, e.nativeEvent.offsetY)
          addMarker({
                      valorant_map_id: mapId,
                      character_id: 1,
                      x_axis: wallStart.x_axis,
                      y_axis: wallStart.y_axis,
                      angle: angle,
                      location_type: 'wall'    
                    })
          setWallStart({})
          break
      default:
          return
    }
    setAddingMarker('') 
  }

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker)
    setShowingMarkerInfo(true)
  }

  return (
    <TransformWrapper>
      <MarkerInfo marker={ selectedMarker } expanded={ showingMarkerInfo } close={ () => setShowingMarkerInfo(false) } />
      <MarkerForm expanded={ addingMarker } close={ () => setAddingMarker('') } />
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
          { markers.map((marker, index) =>
            marker.location_type === 'smoke' ?
            <SmokeMarker
              onClick={ () => handleMarkerClick(marker)}
              key={ index }
              src={ smokeImage } 
              x={ marker.x_axis } 
              y={ marker.y_axis }/> :
            <WallMarker
              onClick={ () => handleMarkerClick(marker)}
              key={ index }
              src={ wallImage } 
              x={ marker.x_axis } 
              y={ marker.y_axis }
              angle={ marker.angle } />
          
          )}
          { wallStart.x_axis &&
            <WallMarker 
              src={ wallImage } 
              x={ wallStart.x_axis } 
              y={ wallStart.y_axis }
              angle={ 0 }
            />
          }
        </TransformComponent>
      </MapContainer>
      <MarkerList markers={ markers } markerClick={ handleMarkerClick } removeMarker={ removeMarker } selectedMarker={ selectedMarker } />
    </TransformWrapper>
  )
}

export default ValorantMap