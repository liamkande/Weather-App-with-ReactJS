import { FETCH_WEATHER } from '../Actions/index'
// state must always return null if nothing is assign to it.
// In this case state is an array so we're good!
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
    //return state.concat([action.payload.data])
    //This is the same as the above concat in the new ES6 Syntax howerver
    //we returning it in a different set of order witch could be changed by switching the order
    return [action.payload.data, ...state]
  }
  return state
}
