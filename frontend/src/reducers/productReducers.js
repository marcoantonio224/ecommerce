

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

export default productListReducer;