import InitialState from '../constants/initialState';
import * as types from '../constants/actions';

export default function categoriesReducer(state = InitialState.categories, action) {

  switch (action.type) {
    case types.SET_CATEGORIES:
      return {...state,
        category1: action.payload.category1,
        category2: action.payload.category2,
        category3: action.payload.category3
      };
    default:
      return state
  }
}

