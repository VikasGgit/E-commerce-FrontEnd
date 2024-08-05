import { api } from "../../config/apiConfi.js";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS } from "./ActionType.js";
 
export const createPayment= (orderId)=>async (dispatch)=>{
        dispatch({type:CREATE_PAYMENT_REQUEST})
        try{
            const {data}=  await api.post(`/api/payments/${orderId}`,
            {}
            );
            if(data.paymentLinkUrl){
                window.location.href=data.paymentLinkUrl;
            }
            dispatch({type:CREATE_PAYMENT_SUCCESS, payload:data});
        }
        catch(err){
            dispatch({type:CREATE_PAYMENT_FAILURE, payload:err.message});
        }
}