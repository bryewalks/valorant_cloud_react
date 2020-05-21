import React from 'react'
import { InfoContainer, InfoWrapper } from './style'

export const MarkerInfo = ({ marker, expanded, close }) => {
  return (
    <InfoWrapper>
      <InfoContainer expanded={ expanded }>
        <h1>Type: { marker.location_type }</h1>
        <h1>Title: { marker.title }</h1>
        <button onClick={ close }>Close</button>
      </InfoContainer>
    </InfoWrapper>
  )
}

export default MarkerInfo 