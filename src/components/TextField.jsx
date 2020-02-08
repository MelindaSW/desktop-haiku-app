import React from 'react'
import { TextField as Tf } from 'office-ui-fabric-react/lib/TextField'
import { Label } from 'office-ui-fabric-react/lib/Label'
import styled from 'styled-components'

const Div = styled.div`
   margin-top: 2rem;
   width: 80%;
`

const TextField = ({ label, multiline, rows, disabled, ...props }) => {
   return (
      <Div>
         <Label>{label}</Label>
         <Tf disabled={disabled} multiline={multiline} rows={rows} {...props} />
      </Div>
   )
}

export default TextField
