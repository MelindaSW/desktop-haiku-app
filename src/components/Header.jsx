import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
   min-height: 100px;
   height: 150px;
   background-color: #282c34;
   box-shadow: 5px 10px 8px 3px #88888873;
   display: flex;
   flex-direction: column;
   align-items: top;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
   text-align: center;
`
const H1 = styled.h1`
   font-size: 1.5em;
   text-align: center;
   color: papayawhip;
`

const Header = ({ title, ...props }) => {
   return (
      <>
         <StyledHeader>
            <div>
               <H1>{title}</H1>
            </div>
         </StyledHeader>
      </>
   )
}

export default Header
