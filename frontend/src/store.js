import { createStore, combineReducers } from 'redux';
import { productListReducer } from './reducers/prouctReducers';

const initialState = {};
// Create store and combine reducers from productList
const reducer = combineReducers({
  productList: productListReducer,
});

const store = createStore(reducer, initialState);

export default store;