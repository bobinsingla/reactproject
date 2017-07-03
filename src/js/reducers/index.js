import { combineReducers } from "redux"

import questions from "./tweetsReducer"
import user from "./userReducer"

export default combineReducers({
  questions,
  user,
})
