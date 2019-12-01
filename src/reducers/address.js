import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function addressReducer(state = InitialState.address, action) {

  switch (action.type) {
    case types.SET_ADDRESS:
      return {...state,
        country: action.payload.country,
        city: action.payload.city,
        address: action.payload.address
      };
    default:
      return state
  }
}

