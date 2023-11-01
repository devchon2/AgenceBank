

function firstNameReducer(state = null, action) {
switch (action.type) {
    case 'SET_FIRSTNAME':
      return action.payload

    case 'GET_FIRSTNAME':
      return state;
    case 'REMOVE_FIRSTNAME':
      return state;
    default:
      return state;
  }
}

export default firstNameReducer;
