import styled from 'styled-components'

const FormContainer = styled.form`
   background-color: oldlace;
   box-shadow: 0px 0px 6px 6px #88888873;
   width: 70%;
   margin: auto;
   margin-top: 40px;
   padding: 30px;
`
const GenerateBtnDiv = styled.div`
   margin: auto;
   display: flex;
   flex-direction: column;
   justify-content: center;
`
const SelectorDiv = styled.div`
   margin-left: 2rem;
`
const RadioBtnDiv = styled.div`
   margin-top: 1.5rem;
   margin-bottom: 0.8rem;
`

export { FormContainer, GenerateBtnDiv, SelectorDiv, RadioBtnDiv }
