import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {
  // Set the product state
  const [products, setProduct] = useState([]);

  useEffect(()=> {
    // Create api for products
    const fetchData = async () => {
      const {data} = await axios.get("/api/products");
      setProduct(data);
    }
    // Initialize the data from server
    fetchData();
    return () => {
    };
  }, [])
  console.log(products, "***")

  return <ul className="products">
            {
              products.map((product,idx) =>
                <li key={idx}>
                  <div className="product">
                    <img className="product-image" src={product.image}/>
                    <div className="product-name">
                      <Link to={`/product/${product._id}`}>{product.name}</Link>
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