import * as types from '../constants/actions';

export const setContact = (email, password) => {
  console.log('actions *********** email, password', email, password);
  return {
    type: types.SET_CONTACT,
    payload: {
      email: email,
      password: password
    }
  }
};
export const setAddress = (country, city, address) => {
  return {type: types.SET_ADDRESS,
    payload: {
      country: country,
      city: city,
      address: address
    }
  }
};
export const setCategories = (category1 ,category2 ,category3 ) => {
  return {type: types.SET_CATEGORIES,
    payload: {
      category1: category1,
      category2: category2,
      category3: category3
    }
  }
};
