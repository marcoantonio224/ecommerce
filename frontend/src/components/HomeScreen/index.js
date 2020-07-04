import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../../actions/productActions';

function HomeScreen(props) {
  // Set the product state
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(()=> {
    // Dispatch api for products
    dispatch(listProducts());
    return () => {
    };
  }, [])

  return (loading) ? <div>Loading....</div>  :
    error ? <div> {error} </div> :
    <ul className="products">
            {
              products.map((product,idx) =>
                <li key={idx}>
                  <div className="product">
                    <img className="product-image" src={product.image}/>
                    <div className="product-name">
                      <Link to={`/products/${product._id}`}>{product.name}</Link>
                    </div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price}</div>
                    <div className="product-rating">{product.rating}Stars ({product.numReviews})</div>
                  </div>
                </li>)
            }
          </ul>
}

export default HomeScreen;