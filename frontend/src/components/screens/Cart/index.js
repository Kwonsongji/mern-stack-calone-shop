/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
// components
import CartItem from '../../CartItem';

import { useDispatch, useSelector} from 'react-redux'
import { addToCart,removeFromCart } from '../../../redux/actions/cartActions';

const CartScreen = (props) => {
  
  const cart = useSelector(state => state.cart); // créer un nouveau state
  const { cartItems} = cart; // on récupère les données des produits pour y avoir accès
  const dispatch = useDispatch();

  //const qty = props.location.search;
  
  const qtyChangeHandler = (id,qty ) => {
    dispatch(addToCart(id, qty))
  } // on veut changer la qté 

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  } // arr.reduce(callback, valeurInitiale)

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
  }


  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <h2> Panier </h2>
        {cartItems.length === 0
          ? (
            <div>
              Votre panier est vide <NavLink to="/">Retour à l&#39;Acceuil </NavLink>
            </div>
          )
          : (cartItems.map(item => (
            <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeHandler}
              />
            ))
          )}
      </div>
      <div className="cartScreen__right">
        <div className="cartScreen__right__info">
          <p> Sous-total ({getCartCount()}) produits </p>
          <p> {getCartSubTotal().toFixed(2)} euros </p>
        </div>
        <div>
          <button
            className="cartScreen__right__button"
            type="button">
            
            <NavLink
              className="nav-item cartScreen__right__button__link"
              to="/adresse-expedition"
            >
              Passer à la caisse
            </NavLink>
           </button>
        </div>
      </div>   
    </div>
  )
}

export default CartScreen;
