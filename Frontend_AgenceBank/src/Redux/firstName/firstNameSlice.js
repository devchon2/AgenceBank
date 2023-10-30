const initialState = null;


function firstNameReducer(state = initialState, action) {
switch (action.type) {
    case 'SET_FIRSTNAME':
      console.log("action.payload", state)
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
