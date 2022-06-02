import { ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART } from "../actions/types";

const initialState = {
  cartItems: [],
  cartItemsLength: 0,
  error: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartItemsLength: state.cartItemsLength + 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        cartItemsLength: state.cartItemsLength - 1,
      };
    case CLEAN_CART:
      return {
        ...state,
        cartItems: [],
        cartItemsLength: 0,
      };
    default:
      return state;
  }
}
