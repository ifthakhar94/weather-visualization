const initialState = {
    location: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_LOCATION':
        return {
          ...state,
          location: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  