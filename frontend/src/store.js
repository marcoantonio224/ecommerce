import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import  { productListReducer, productDetailsReducer } from './reducers/productReducers';
import Cookie from 'js-cookie';
import { cartReducer } from './reducers/cartReducers';
import thunk from 'redux-thunk';

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
// Create store and combine reducers from productList
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState,  composeEnhancer(applyMiddleware(thunk)));

export default store;