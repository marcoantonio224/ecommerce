import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants'
import axios from 'axios';

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

export { listProducts }