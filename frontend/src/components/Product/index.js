/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
//import moonPendant from '../assets/fonts/moon-pendant.png';


const Product = ({name, image, price, material, productId}) => {
  return (
    <div className="product">
       <img
        src={image}
        alt={name}
        className="small"
      />
   
      {/* <img src={image} alt={name} /> */}
      <div className="product__info">
        <p className="product__info__name">{name}</p>
        <p className="product__info__material">
          {material}
        </p>
        <p className="product__info__price"> {price} euros</p>
        <NavLink
          className="product__info__button"
          activeClassName="nav-item--active"
          to={`/produit/${productId}`} 
        >
          Voir
        </NavLink>
      </div>
    </div>
  )
}

export default Product
