import styled from 'styled-components'

export const MapContainer = styled.div`
  width: 750px;
  margin: 0 auto;
  border: 2px solid black;
  background-color: darkgray;
  cursor: ${props => props.addingSmoke ? 'crosshair' : 'grab'};
  :active {
    cursor: grabbing;
  }
`

export const MapImages = styled.div`
  position: relative;
  width: 750px;
  height: 750px;
`

export const MapImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  padding: 25px;
  src: ${ props => props.src};
`

export const MapMarker = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${ props => props.y}px;
  left: ${ props => props.x}px;
  src: ${ props => props.src};
  color: rgba(42,200,73,0.2);
  z-index: 999;
  :hover {
    cursor: default;
  }
`