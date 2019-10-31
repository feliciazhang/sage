import { combineReducers } from 'redux'

import user from './user'
import recipes from './recipes'
import mealPlan from './mealPlan'
import grocery from './grocery'

export default combineReducers({
  user,
  recipes,
  mealPlan,
  grocery
})
