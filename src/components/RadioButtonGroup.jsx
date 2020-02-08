import React from 'react'
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup'
import { Label } from 'office-ui-fabric-react/lib/Label'
import styled from 'styled-components'

const Div = styled.div`
   margin-top: 1.5rem;
   margin-bottom: 0.8rem;
`

const RadioButtonGroup = ({ options, label, ...props }) => {
   return (
      <Div>
         <Label>{label}</Label>
         <ChoiceGroup options={options} {...props} />
      </Div>
   )
}

export default RadioButtonGroup
