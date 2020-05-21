import React from 'react'
import { FormContainer, FormWrapper } from './style'

export const MarkerForm = ({ close, expanded, xAxis, yAxis }) => {
  return (
    <FormWrapper>
      <FormContainer expanded={ expanded }>
        <h1>axis</h1>
        <button onClick={ close }>Close</button>
      </FormContainer>
    </FormWrapper>
  )
}

export default MarkerForm