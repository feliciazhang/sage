import { UNITS } from '../constants'

// DEFAULT STATE
const initialState = [{
  title: "Applesauce",
  description: "Yummy applesauce-- quick and easy" ,
  cookTime: { hours: 1, min: 0 },
  servings: 6,
  ingredients: [
    { quantityt: 5, unit: UNITS.CUPS, item: "apples"},
    { quantityt: 0.5, unit: UNITS.CUPS, item: "water"},
    { quantityt: 0.75, unit: UNITS.CUPS, item: "white sugar"},
    { quantityt: 0.25, unit: UNITS.TSP, item: "cinnamon"}],
  steps: "Put all ingredients together and blend",
  tags: ["snack"]
}]

// ACTIONS
const ADD_RECIPE = 'ADD_RECIPE'
const DELETE_RECIPE = 'DELETE_RECIPE'
const UPDATE_RECIPE = "UPDATE_RECIPE"


export const addRecipe = recipe => ({
  type: ADD_RECIPE, recipe
})

export const deleteRecipe = index => ({
  type: DELETE_RECIPE, index
})

export const updateRecipe = (index, recipe) => ({
  type: UPDATE_RECIPE, index, recipe
})

// REDUCERS
const handleAddRecipe = (state, action) => {
  const clone = state.splice(0)
  clone.push(action.recipe)
  return clone
}

const handleDeleteRecipe = (state, action) => {
  const clone = state.splice(0)
  clone.splice(action.index, 1)
  return clone
}

const handleUpdateRecipe = (state, action) => {
  const clone = state.splice(0)
  clone[action.index] = action.recipe
  return clone
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return handleAddRecipe(state, action)
    case DELETE_RECIPE:
      return handleDeleteRecipe(state, action)
    case UPDATE_RECIPE:
      return handleUpdateRecipe(state, action)
    default:
      return state;
  }
}
