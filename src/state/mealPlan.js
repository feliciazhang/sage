// DEFAULT STATE
const initialState = {
  "Monday": [{ meal: "Applesauce", servings: 2 }],
  "Tuesday": [],
  "Wednesday": [],
  "Thursday": [],
  "Friday": [],
  "Saturday": [],
  "Sunday": []
}

// ACTIONS
const UPDATE_MEAL = 'UPDATE_MEAL'

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
