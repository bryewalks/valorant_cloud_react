import styled from 'styled-components'

export const MapContainer = styled.div`
  position: relative;
  width: 750px;
  margin: 0 auto;
  border: 2px solid black;
  background-color: darkgray;
  cursor: ${props => props.addingMarker ? 'crosshair' : 'grab'};
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

export const SmokeMarker = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  top: ${ props => props.y}px;
  left: ${ props => props.x}px;
  border:none;
  width:25px;
  height:25px;
  background: url(${props => props.src}) no-repeat;
  :hover {
    cursor: pointer;
  }
`

export const WallMarker = styled.button`
  position: absolute;
  transform: rotate(30deg);
  transform-origin: center left;
  top: ${ props => props.y}px;
  left: ${ props => props.x}px;
  border:none;
  width:250px;
  height:5px;
  background: url(${props => props.src}) no-repeat;
  :hover {
    cursor: pointer;
  }
`