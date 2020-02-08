import React from 'react'
import styled from 'styled-components'

const Button = ({ children, disabled, ...props }) => {
   const StyledButton = styled.button`
      background-color: ${disabled ? '#282c3442' : '#282c34'};
      border: 2px solid ${disabled ? '#282c3450' : '#282c34'};
      border-radius: 10px;
      color: white;
      font-weight: bolder;
      font-size: 0.8em;
      margin: 1rem;
      padding: 0.6rem 1rem;
      text-transform: uppercase;
   `
   return (
      <>
         <StyledButton disabled={disabled} {...props}>
            {children}
         </StyledButton>
      </>
   )
}

export default Button
