import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./ActionType.js";

const initialState = {
  cart: null,
  laoding: false,
  error: null,
  cartItems: [],
  data: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, laoding: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        laoding: false,
        error: null,
        cartItems: [...state.cartItems, action.payload.cartItems],
      };
    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, laoding: false, error: action.payload };
    case GET_CART_REQUEST:
      return { ...state, laoding: true, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        laoding: false,
        cart: action.payload,
        error: null,
        cartItems: action.payload.cartItems,
      };
    case GET_CART_FAILURE:
      return { ...state, laoding: false, error: action.payload };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, laoding: true, error: null };
    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        laoding: false,
        deletedCartItems:action.payload,
        error: null,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        upadatedCartItem:action.payload,
        loading: false,
      };
    case UPDATE_CART_ITEM_FAILURE:
    case REMOVE_CART_ITEM_FAILURE:
    case "CLEAR_CART_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    
    case "CLEAR_CART_REQUEST":
      return { ...state, laoding:true};
    case "CLEAR_CART_SUCCESS":
      return  {...state, data:action.payload}
    default:
      return state;
  }
};
