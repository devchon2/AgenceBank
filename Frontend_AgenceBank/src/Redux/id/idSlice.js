
function idReducer(state = null, action) {
  switch (action.type) {
    case 'SET_ID':
      return action.payload
    
    case 'REMOVE_ID':
      return {
        ...state,
        id: null,
      };
    default:
      return state;
  }
}

export default idReducer;
