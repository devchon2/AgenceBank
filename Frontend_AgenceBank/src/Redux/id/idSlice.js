const initialState = {
  id: null,
};

function idReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_ID':
      console.log('id reducer set id');
      return {
        ...state,
        id: action.payload,
      };
    
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
