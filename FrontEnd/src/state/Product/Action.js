// import { api } from "../../config/apiConfi.js";
// import {
//   FIND_PRODUCTS_FAILURE,
//   FIND_PRODUCTS_REQUEST,
//   FIND_PRODUCTS_SUCCESS,
//   FIND_PRODUCT_BY_ID_FAILURE,
//   FIND_PRODUCT_BY_ID_REQUEST,
//   FIND_PRODUCT_BY_ID_SUCCESS,
// } from "./ActionType.js";

// export const findProducts = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCTS_REQUEST });

//   const {
//     category,
//         color,
//         sizes,
//         minPrice, 
//         maxPrice, 
//         sort,
//         minDiscount,
//         pageNumber,
//         pageSize,
//         stock
//   } = reqData;
  

//   try {
//     const  {data} = await api.get(
//       `/api/products`
//     );
//     console.log("product data" , {data});
//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (e) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: e.message });
//   }
// };

// export const findProductsBYId = (reqData) => async (dispatch) => {
//   dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });

//   const { productId } = reqData;

//   try {
//     const { data } = await api.get(`/api/products/id/${productId}`);
//     dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
//   } catch (e) {
//     dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: e.message });
//   }
// };


import { api } from "../../config/apiConfi.js";
import {
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./ActionType.js";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    sort,
    minDiscount,
    pageNumber,
    pageSize,
    stock,
  } = reqData;

  try {
    // Constructing query parameters
    const queryParams = {
      category,
      color,
      sizes,
      minPrice,
      maxPrice,
      sort,
      minDiscount,
      pageNumber,
      pageSize,
      stock,
    };

    // Removing undefined or null parameters
    Object.keys(queryParams).forEach(
      (key) => queryParams[key] === undefined && delete queryParams[key]
    );

    const { data } = await api.get("/api/products", {
      params: queryParams,
    });

    console.log("Product data:", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  console.log(reqData)
  const { productId } = reqData;

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log(data);  
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
