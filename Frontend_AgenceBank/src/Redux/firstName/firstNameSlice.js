const initialState = {
  firstName: null,
};

function firstNameReducer(state = initialState, action) {
switch (action.type) {
    case 'SET_FIRSTNAME':
      
      return ({
        ...state, 
        firstName: action.payload,
});
    case 'GET_FIRSTNAME':
      return {...state};
    case 'REMOVE_FIRSTNAME':
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return { ...state};
  }
}

export default firstNameReducer;
