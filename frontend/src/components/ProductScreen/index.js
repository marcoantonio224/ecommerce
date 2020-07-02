import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import './main.css';

function ProductScreen(props) {
  const product = data.products.find(item => item._id === props.match.params.id);
  return <div>
            <div>
              <Link to="/">Back to result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                  <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                  <ul>
                    <li>
                      <h4>{product.name}</h4>
                    </li>
                    <li>
                      {product.rating} Starts ({product.numReviews} Reviews)
                    </li>
                    <li>
                      Price: <b>${product.price}</b>
                    </li>
                    <li>
                      <div>
                        Description:
                        {product.description}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="details-action">
                <ul>
                  <li>
                    Price: {product.price}
                  </li>
                  <li>
                    Status: {product.price}
                  </li>
                  <li>
                    Qty: <select>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                         </select>
                  </li>
                  <li>
                    <button className="button primary">Add to cart</button>
                  </li>
                </ul>
            </div>
            </div>
        </div>
}

export default ProductScreen;