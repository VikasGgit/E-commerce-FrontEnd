import { api } from "../../config/apiConfi.js";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType.js";


export const createOrder=(reqData)=>async(dispatch)=>{
    console.log("request Data: " , reqData);
  dispatch({type: CREATE_ORDER_REQUEST})
  try{
    const {data} = await api.post('/api/orders',
        reqData.address,
    );      
    if(data._id){
        reqData.navigate({search:`step=3&order_id=${data._id}`})
    }
    console.log("created Order: " , data);
    dispatch({type: CREATE_ORDER_SUCCESS,
        payload: data});

  }
  catch(error){
    console.log("catched error: " + error);
    dispatch({type: CREATE_ORDER_FAILURE,
    });
  }
}

export const getOrderById=(orderId)=>async(dispatch)=>{
    console.log("order req Id: " + orderId);
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try{
        const {data}=await api.get(`api/orders/${orderId}`)
        console.log("order by Id: " + data);
        dispatch({type: GET_ORDER_BY_ID_SUCCESS});
    }
    catch(error){
        console.log("catch error: " + error)
        dispatch({type: GET_ORDER_BY_ID_FAILURE});

    }

}