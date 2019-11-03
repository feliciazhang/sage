import { UNITS } from '../constants'

// DEFAULT STATE
const initialState = [
  { quantity: 1, unit: UNITS.CUP, item: "milk" },
  { quantity: 15, unit: UNITS.OZ, item: "diced tomato" },
  { quantity: 1, unit: UNITS.NA, item: "bread" },
  { quantity: 1, unit: UNITS.NA, item: "pasta" }
]

// ACTIONS
const UPDATE_ITEM = 'UPDATE_ITEM'

export const updateItem = items => ({
  type: UPDATE_ITEM, items
})

// REDUCERS
const handleUpdateItem = (state, action) => {
  return action.items
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM:
      return handleUpdateItem(state, action)
    default:
      return state
  }
}
