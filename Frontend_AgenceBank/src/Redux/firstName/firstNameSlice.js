const initialState = null;


function firstNameReducer(state = initialState, action) {
switch (action.type) {
    case 'SET_FIRSTNAME':
      return action.payload

    case 'GET_FIRSTNAME':
      return state;
    case 'REMOVE_FIRSTNAME':
      return initialState;
    default:
      return state;
  }
}

export default firstNameReducer;
