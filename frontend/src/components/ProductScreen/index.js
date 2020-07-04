import React , { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../../actions/productActions';
import './main.css';

function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    // Grab product Id
    const { id } = props.match.params;
    dispatch(detailsProduct(id));
    return () => {
      //
    }
  }, []);

  return <div>
            <div>
              <Link to="/">Back to result</Link>
            </div>
            { loading ? <div> Loading... </div> :
              error ? <div> {error} </div> :
              (
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
                        Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                              {/* Render the amount of items left in stock  */}
                              {[...Array(product.countInStock).keys()].map(count =>
                                <option key={count+1} value={ count + 1 }> {count + 1} </option>
                              )}
                            </select>
                      </li>
                      <li>
                        <button className="button primary">Add to cart</button>
                      </li>
                    </ul>
                </div>
                </div>
              )
            }

        </div>
}

export default ProductScreen;