import React from 'react'
import { FormContainer, FormWrapper } from './style'

export const MarkerForm = ({ hidden, xAxis, yAxis }) => {
  return (
    <FormWrapper hidden={ hidden }>
      <FormContainer>
        xAxis
      </FormContainer>
    </FormWrapper>
  )
}

export default MarkerForm