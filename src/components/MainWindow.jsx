import React from 'react'
import Header from './Header'
import Form from './Form'
import styled from 'styled-components'
// import ContainerForm from './ContainerForm'
import HaikuDisplay from './HaikuDisplay'

const MainWindow = () => {
   const MainDiv = styled.div`
      background-color: papayawhip;
      min-height: 100vh;
   `
   return (
      <MainDiv>
         <Header className="head" title="electron-haiku" />
         <Form />
         {/* <ContainerForm /> */}
         <HaikuDisplay />
      </MainDiv>
   )
}

export default MainWindow
