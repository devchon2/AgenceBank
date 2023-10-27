const initialState = {
  lastName: null,
};

function lastNameReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LASTNAME':
      return {
        ...state,
        lastName: action.payload,
      };
    case 'REMOVE_LASTNAME':
      return {
        ...state,
        lastName: null,
      };
    default:
      return state;
  }
}

export default lastNameReducer;