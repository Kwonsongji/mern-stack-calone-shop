/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
//import moonPendant from '../../assets/fonts/moon-pendant.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { getProductDetails } from '../../../redux/actions/productActions';
import { addToCart } from '../../../redux/actions/cartActions'; 

const ProductScreen = ( {match, history}) => {
   const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  
   const productDetails = useSelector(state => state.getProductDetails);
   const { loading, error, product } = productDetails;

   useEffect(() => {
     if (product && match.params.id !== product._id) {
       dispatch(getProductDetails(match.params.id));
     }
   }, [dispatch, product, match]); 
  
   
  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push("/panier");
  }
  return (
    <div className="productScreen">
      { loading ? <h2>Loading...</h2>
        : error ? <h2>{error}</h2>
          : (
            <>
              
      <div className="productScreen__left">
        <div className="productScreen__left__image">
 {/*                   <img src={moonPendant} alt={product.name} />  */}
                  <img src={product.image} alt={product.name} /> 
        </div>
        <div className="productScreen__left__info">
                  <p className="productScreen__left__name"> {product.name}</p>
                  <p className="productScreen__left__price"> {product.price}</p>
                  <p className="productScreen__left__material"> {product.material}</p>
        </div>
      </div>
      <div className="productScreen__right">
        <div className="productScreen__right__info">
          <p className="productScreen__right__price">
            Prix: <span> {product.price} euros </span>
          </p>
          <p className="productScreen__right__status">
                    Statut:
                    <span>
                      {product.countInStock > 0 ? "En Stock" : "En Rupture de Stock"}
                    </span>
          </p>
          <p className="productScreen__right__qty">
            Quantité:
                    <select value={qty} /* lorsqu'on slct le nbre voulu */
                      onChange={(e) => setQty(e.target.value)}>
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option
                    key={x+1}
                    value={x+1}
                  >
                    {x+1}
                  </option> //on utilise l'instance array pour créer un tableau de liste
                ))}
            </select>
          </p>
          <p>
            <button
              type="button"
              onClick={ addToCartHandler} 
              className="productScreen__right__add"           
              > Ajouter
            </button>
          </p>
        </div>
        
      </div>
            </> 
      )}
            
      
    </div>
  )
}

export default ProductScreen;
