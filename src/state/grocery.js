import { UNITS } from '../constants'

// DEFAULT STATE
const initialState = [
  { quantity: 1, unit: UNITS.CUP, item: "milk" },
  { quantity: 15, unit: UNITS.OZ, item: "diced tomato" },
  { quantity: 1, unit: UNITS.NA, item: "bread" },
  { quantity: 1, unit: UNITS.NA, item: "pasta" }
]

// ACTIONS
const ADD_ITEM = 'ADD_ITEM'
const DELETE_ITEM = 'DELETE_ITEM'
const UPDATE_ITEM = 'UPDATE_ITEM'

export const addItem = (item) => ({
  type: ADD_ITEM, item
})

export const deleteItem = (index) => ({
  type: DELETE_ITEM, index
})

export const updateItem = (index, item) => ({
  type: UPDATE_ITEM, index, item
})

// REDUCERS
const handleAddItem = (state, action) => {
  const clone = state.splice(0)
  clone.push(action.item)
  return clone
}

const handleDeleteItem = (state, action) => {
  const clone = state.splice(0)
  clone.splice(action.item, 1)
  return clone
}

const handleUpdateItem = (state, action) => {
  const clone = state.splice(0)
  clone[action.index] = action.item
  return clone
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return handleAddItem(state, action)
    case DELETE_ITEM:
      return handleDeleteItem(state, action)
    case UPDATE_ITEM:
      return handleUpdateItem(state, action)
    default:
      return state;
  }
}
