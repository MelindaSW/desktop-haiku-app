import { combineReducers } from 'redux'
import { haikuReducer } from './haikuReducer'

// add more reducers to the combinereducers if needed
const rootReducer = combineReducers({ haikustore: haikuReducer })

export default rootReducer
