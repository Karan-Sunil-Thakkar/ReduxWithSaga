import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';

//  create first initial state
const initialState = {
    cart:[],
    fakestore:[],
    
};

//  create reducer function

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // demo api 
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };

    case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter(item => {
                return item.name != action.payload;
              })
          };
// api 
    case SET_USER_DATA:
        return {
            ...state,
            fakestore: [...state.fakestore, ...action.payload]
          };


    default:
      return state;
  }
};
