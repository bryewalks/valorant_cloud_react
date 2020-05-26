import React from 'react'

import { MarkersContainer, MarkerListItem, RemoveButton } from './style'

export const MarkerList = ({ markers, markerClick, selectedMarker, removeMarker }) => {
  console.log(markers)
  return (
    <MarkersContainer>
      { markers.map((marker, index) =>
          <MarkerListItem key={ index } 
                          onClick={ () => markerClick(marker) } 
                          selected={ marker.id === selectedMarker.id }>
                          { marker.location_type }
            <RemoveButton onClick={ (event) => {event.stopPropagation()
                                                removeMarker(marker)
                                                }}>Delete</RemoveButton>
          </MarkerListItem>
      )}
    </MarkersContainer>
  )
}

export default MarkerList