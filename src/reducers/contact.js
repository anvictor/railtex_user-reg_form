import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function contactReducer(state = InitialState.contact, action) {

  switch (action.type) {
    case types.SET_CONTACT:
      console.log('redusers***contact *** action',action);
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      };
    default:
      return state
  }
}

