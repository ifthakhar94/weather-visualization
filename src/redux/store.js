import { createStore } from 'redux';

// initial state and reducer
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

// Redux store
const store = createStore(reducer);

export default store;
