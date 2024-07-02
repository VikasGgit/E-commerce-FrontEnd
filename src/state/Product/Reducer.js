import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_BY_ID_REQUEST } from "./ActionType.js";

const initialState = {
    products: [],
    product: null,
    loading: false,
    error:null
};

export const customerProductReducer=(state=initialState, action)=>{

    switch(action.type){
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
            return {...state, loading: true, error:null};
        case FIND_PRODUCTS_SUCCESS:
            return {...state, products:action.payload, error:null, loading: false};
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state, product:action.payload, error:null, loading:false};
        case FIND_PRODUCT_BY_ID_FAILURE:
        case FIND_PRODUCTS_FAILURE:
            return {...state,  error:action.payload, loading:false};
        default: return state;
    }
}