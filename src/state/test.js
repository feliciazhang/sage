// DEFAULT STATE
const initialState = {
  test: 0,
}

// ACTIONS
const TEST = 'TEST';

export const doTest = res => ({
  type: TEST, res
})

// REDUCERS
const handleTest = (state, action) => (
  { ...state, test: action.res }
)


export default (state = initialState, action) => {
  switch (action.type) {
    case TEST:
       return handleTest(state, action)
    default:
      return state;
  }
}
