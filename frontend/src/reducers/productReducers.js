import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from '../constants/productConstants';

/* Product List Reducer */
function productListReducer(state = {products:[]}, action) {
  switch (action.type) {
    // Check and see if the request is loading
    case PRODUCT_LIST_REQUEST:
      return { loading: true}
    // If success, return the products to user
    case PRODUCT_LIST_SUCCESS:
      return { loading:false, products: action.payload};
    // If Failed, return error
      case PRODUCT_LIST_FAIL:
      return { loading:false, error: action.payload }
    // Return default state if all else fails
      default:
      return state;
  }
}

/* Product Detail Reducer */
function productDetailsReducer(state = { product:{} }, action) {
  switch (action.type) {
    // Check and see if the request is loading
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true }
    // If success, return the products to user
    case PRODUCT_DETAILS_SUCCESS:
      return { loading:false, product: action.payload };
    // If Failed, return error
      case PRODUCT_DETAILS_FAIL:
      return { loading:false, error: action.payload }
    // Return default state if all else fails
      default:
      return state;
  }
}


export { productListReducer, productDetailsReducer };