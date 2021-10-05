/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
//import moonPendant from '../assets/fonts/moon-pendant.png'

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
         <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          />
{/*         <img src={moonPendant} alt="Pendentif Lunaire" /> */}
      </div>
      < NavLink
        to={`/product/${item.product}`}
        className="cartItem__name"
      >
        <p >{item.name} </p>
      </NavLink>
      <p className="cartItem__prix">{item.price}€</p>
      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInstock).keys()].map((x) => (
          <option
            key={x+1}
            value={x+1}
          >
          {x+1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={()=> removeHandler(item.product)}
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}

export default CartItem
