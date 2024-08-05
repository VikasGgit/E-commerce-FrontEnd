import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS } from "./ActionType";

const initialState = {
    success: false,
    loading: false,
    error:null
};

export const paymentReducer=(state=initialState, action)=>{


    switch(action.type){
        case CREATE_PAYMENT_REQUEST:
            return {...state, loading: true, error:null};
        case CREATE_PAYMENT_SUCCESS:
            return {success:true , error:null, loading: false};
        
        case CREATE_PAYMENT_FAILURE:
            return {...state,  error:action.payload, loading:false};
        default: return state;
    }
}