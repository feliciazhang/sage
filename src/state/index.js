import { combineReducers } from 'redux'

import user from './user'
import recipes from './recipes'
import mealPlan from './mealPlan'

export default combineReducers({
  user,
  recipes,
  mealPlan
})
