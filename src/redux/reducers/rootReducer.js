import { combineReducers } from "redux"

import todoReducer from "./todo/"
import customizer from "./customizer/"
import auth from "./auth/"
import navbar from "./navbar/Index"


const rootReducer = combineReducers({
  
  todoApp: todoReducer,
  
  customizer: customizer,
  auth: auth,
  navbar: navbar,
  
})

export default rootReducer
