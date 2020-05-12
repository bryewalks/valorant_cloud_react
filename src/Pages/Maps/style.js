import styled from 'styled-components'

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

export const MapImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  src: ${ props => props.src};
`