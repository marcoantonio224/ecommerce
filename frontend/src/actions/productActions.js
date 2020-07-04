import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
         PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
       } from '../constants/productConstants';
import axios from 'axios';
// Get the list of products
const listProducts = () => async (dispatch) => {
  try {
    // Dispatch list request for products
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("/api/products");
    // Dispatch a success to the reducer with the data
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });

  } catch(error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
}
// Get the details of a particular product
const detailsProduct = (productId) => async (dispatch) => {
  try{
    // Dispatch request for product details
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
    const { data } = await axios.get("/api/products/" + productId);
    // Dispatch a success for product details
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload:data });
  } catch(error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.message });
  }
}

export { listProducts, detailsProduct }