import { ALTER_HAIKU } from '../actions/actions'

const initialState = {
   isDisabled: false,
   haiku: ['This is', 'The initial state of', 'the haiku array'],
}

export function haikuReducer(state = initialState, action) {
   // console.log(initialState.haiku.toString())
   // console.log(state.haiku.toString())

   switch (action.type) {
      case ALTER_HAIKU:
         return { ...state, haiku: action.haiku }
      default:
         return state
   }
}
