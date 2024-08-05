import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_FAILURE,
} from "./ActionType.js";

const initialState = {
  user: null,
  isloading: false,
  error: null,
  jwt: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, isloading: true, error: null };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return { ...state, isloading: false,  jwt:action.payload,error: null };
    case GET_USER_SUCCESS:
      return { ...state, isloading: false, user: action.payload, error: null };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return { ...state, isloading: false, error: action.payload };
    case LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
};
