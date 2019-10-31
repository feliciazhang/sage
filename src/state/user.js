// DEFAULT STATE
const initialState = {
  hasSeenIntroModal: false,
}

// ACTIONS
const INTRO_MODAL_SEEN = 'INTRO_MODAL_SEEN'

export const setHasSeenIntroModal = seen => ({
  type: INTRO_MODAL_SEEN, seen
})

// REDUCERS
const handleIntroModalSeen = (state, action) => (
  { ...state, hasSeenIntroModal: action.seen }
)


export default (state = initialState, action) => {
  switch (action.type) {
    case INTRO_MODAL_SEEN:
      return handleIntroModalSeen(state, action)
    default:
      return state;
  }
}
