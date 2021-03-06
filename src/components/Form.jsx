import React, { useState, useCallback } from 'react'
import Button from './Button'
import TextField from './TextField'
import { Label } from 'office-ui-fabric-react/lib/Label'
import { haiku as mockhaiku } from '../mockdata'
import { connect } from 'react-redux'
import { alterHaiku } from '../actions/actions'
import { channels as chnl } from '../channels'
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup'
import {
   FormContainer,
   GenerateBtnDiv,
   SelectorDiv,
   RadioBtnDiv,
} from './StyledFormComponents'

const options = [
   {
      key: 'pride',
      text: 'Pride and Prejudice',
      styles: { root: { color: 'black' } },
   },
   { key: 'harry', text: 'Harry Potter' },
]

const Form = ({ onGenerateClick, haikuprop, dispatch, ...props }) => {
   const [radioDisabled, setRadioDisabled] = useState(true)
   const [inputDisabled, setInputDisabled] = useState(true)
   const [openDisabled, setOpenDisabled] = useState(true)
   const [selectedKey, setSelectedKey] = useState('')

   function handleOpenClicked() {
      setOpenDisabled(false)
      setInputDisabled(true)
      setRadioDisabled(true)
   }
   function handleInputClicked() {
      setInputDisabled(false)
      setOpenDisabled(true)
      setRadioDisabled(true)
   }
   function handleRadioClicked() {
      setRadioDisabled(false)
      setInputDisabled(true)
      setOpenDisabled(true)
   }

   function handleGenerateClicked(source, key) {
      console.log('Generate clicked')
      // The parameter should be a state variable
      // Source could be either 'radiobuttons' (key), 'textinput' (text) or 'openfile' (null)
      // check the source in main and handle each generator source there.
      window.ipcRenderer.send(chnl.MAKE_HAIKU, source, 'pride')
      // window.ipcRenderer.on(chnl.HAIKU_CREATED, (evt, haiku) => {
      //    console.log(haiku)
      //    dispatch(alterHaiku(mockhaiku))
      // })
   }

   // TODO: figure out how to make the radiobuttons return the keys here.
   // Future TODO: Make radiobuttons generate automatically based on the files in the textfiles folder.
   const handleRadioButtonChange = useCallback()
   // e => {
   //    setSelectedKey(e.target.text)
   //    console.log(e.target.text)
   //    console.log('selected key: ', selectedKey)
   // },
   // [selectedKey]

   return (
      <FormContainer onSubmit={e => e.preventDefault()}>
         <h3>Select one text source:</h3>
         <SelectorDiv>
            <RadioBtnDiv onClick={handleRadioClicked}>
               <Label>Generate haiku from the first pages of</Label>
               <ChoiceGroup
                  options={options}
                  disabled={radioDisabled}
                  onChange={handleRadioButtonChange}
               />
            </RadioBtnDiv>
            <div onClick={() => handleInputClicked()}>
               <TextField
                  disabled={inputDisabled}
                  borderless={true}
                  description="The generator needs more than 15 words and the field does not accept more than 2000 letters"
                  errorMessage=""
                  label="type or paste any text here:"
                  multiline
                  rows={4}
               />
            </div>
            <p onClick={handleOpenClicked}>
               <Label>Or generate from the contents of a .txt file:</Label>
               <Button children="Open file" disabled={openDisabled} />
            </p>
         </SelectorDiv>
         <GenerateBtnDiv>
            <Button
               children="Generate"
               disabled={radioDisabled && inputDisabled && openDisabled}
               onClick={() => handleGenerateClicked()}
            />
         </GenerateBtnDiv>
      </FormContainer>
   )
}

const mapStateToProps = (state, ownProps) => {
   console.log(state)
   return { haikuprop: state.haikustore.haiku }
}

export default connect(mapStateToProps)(Form)

// const mapDispatchToProps = dispatch => {
//    return {
//       onGenerateClick: newHaiku => dispatch(alterHaiku(newHaiku)),
//    }
// }
// const mapStateToProps = (state, ownProps) => ({
//    // ... computed data from state and optionally ownProps
// })

// const mapDispatchToProps = {
//    // ... normally is an object full of action creators
// }

// // `connect` returns a new function that accepts the component to wrap:
// const connectToStore = connect(mapStateToProps, mapDispatchToProps)
// // and that function returns the connected, wrapper component:
// const ConnectedComponent = connectToStore(Component)

// // We normally do both in one step, like this:
// connect(mapStateToProps, mapDispatchToProps)(Component)
