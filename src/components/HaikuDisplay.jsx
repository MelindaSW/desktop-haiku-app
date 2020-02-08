import React from 'react'
import styled from 'styled-components'
import { TooltipHost } from 'office-ui-fabric-react/lib/Tooltip'

import Button from './Button'
import { haiku } from '../mockdata'

import { connect } from 'react-redux'

const DisplayDiv = styled.div`
   background-color: oldlace;
   width: 70%;
   margin: auto;
   margin-top: 40px;
   padding: 30px;
   #buttons {
      text-align: center;
   }
`
const HaikuFrame = styled.article`
   background-color: white;
   box-shadow: 0px 0px 6px 6px #88888873;
   margin-bottom: 10%;
   div {
      margin-top: 10%;
      padding: 25px;
   }
   span {
      font-family: sans-serif;
      font-weight: bolder;
      font-style: italic;
      margin-left: 10%;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
   }
`
const calloutProps = { gapSpace: 0 }

const HaikuDisplay = ({ haiku, ...props }) => {
   return (
      <DisplayDiv>
         <HaikuFrame>
            <div>
               {haiku.map(row => (
                  <p key={row}>
                     <span>{row}</span>
                  </p>
               ))}
            </div>
         </HaikuFrame>
         <div id="buttons">
            <Button children="Save" />
            <TooltipHost
               calloutProps={calloutProps}
               content="Generates from the same text source"
               id={'againtooltip'}
            >
               <Button aria-describedby={'againtooltip'} children="Again!" />
            </TooltipHost>
            <Button children="Cancel" />
         </div>
      </DisplayDiv>
   )
}

const mapStateToProps = ({ haikustore }, ownProps) => ({
   haiku: haikustore.haiku,
})
export default connect(mapStateToProps)(HaikuDisplay)
