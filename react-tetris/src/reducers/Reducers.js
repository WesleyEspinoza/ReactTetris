import { combineReducers } from 'redux'
import GameReducer from './GameReducer'
// The state handled by `gameReducer` will be stored with the property name `game` on the Redux store.
const reducers = combineReducers({
  game: GameReducer
})
export default reducers