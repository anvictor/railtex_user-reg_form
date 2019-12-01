import { combineReducers } from 'redux'
import addressReducer from './address'
import categoriesReducer from './categories'
import contactReducer from './contact'
export default combineReducers({
  address: addressReducer,
  categories: categoriesReducer,
  contact: contactReducer
})
