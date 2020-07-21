import Axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';

const addToCart = (productId, qty)=> async (dispatch) => {

  try{
    // Get the product
    const { data } = await Axios.get('/api/products/'+productId);
    // Dispatch the product from api response
    dispatch({
      type: CART_ADD_ITEM, payload:{
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty
    }});

  } catch (error) {
    console.log(error);
  }
}

export { addToCart }