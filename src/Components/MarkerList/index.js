import React from 'react'

import { MarkersContainer, MarkersTable, MarkerRow } from './style'

export const MarkerList = ({ markers, markerClick, selectedMarker, removeMarker }) => {
  return (
    <MarkersContainer>
      <MarkersTable>
        <tr>
          <th>Type</th>
          <th>Title</th>
          <th>Delete</th>
        </tr>
      { markers.map((marker, index) =>
        <MarkerRow key={ index } 
            onClick={ () => markerClick(marker) } 
            selected={ marker.id === selectedMarker.id }>
          <td>{ marker.location_type }</td>
          <td>{ marker.title }</td>
          <td onClick={ (event) => {event.stopPropagation()
                                    removeMarker(marker)}}>x</td>
        </MarkerRow>
      )}
      </MarkersTable>
    </MarkersContainer>
  )
}

export default MarkerList