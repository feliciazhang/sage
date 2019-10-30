// DEFAULT STATE
const initialState = {
  "monday": [{ meal: "Applesauce", servings: 2 }],
  "tuesday": [],
  "wednesday": [],
  "thursday": [],
  "friday": [],
  "saturday": [],
  "sunday": []
}

// ACTIONS
const UPDATE_MEAL = 'ADD_RECIPE'

export const updateMeal = (day, meals) => ({
  type: UPDATE_MEAL, day, meals
})

// REDUCERS
// updates all meals for one day
const handleUpdateMeal = (state, action) => (
  { ...state, [action.day]: action.meals }
)

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MEAL:
      return handleUpdateMeal(state, action)
    default:
      return state;
  }
}