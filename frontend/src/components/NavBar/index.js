/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import User from '../screens/User';

import './style.scss'
// rafce
const NavBar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);// pour récupérer les données du user 
  const { userInfo } = userSignin;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }

  return (
    <nav className="navbar">
      
      <div className="navbar__logo">
        <h2 className="navbar__logo__title"> Calone </h2>
      </div>
      
        <ul className="navbar__links">
          <li>

            <NavLink
              className="nav-item-cart navbar__cart__link "
                to="/panier"
                activeClassName="nav-item--active"
            >
              <i className="fas fa-shopping-cart"></i>
              <span>
              
              <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </NavLink>
          </li>  
        {userInfo ? (
          <li className="navbar__username">
            <User />
          </li>
        ) : (
             <li>
          <NavLink
                className="nav-item navbar_list_link "
                to="/connexion"
                activeClassName="nav-item--active"
          >
          <p className="navbar_signin_title"> Connexion </p>
 

            </NavLink>
        </li>
            
        )}  
        </ul>
      <div className="navbar__hamburger__menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </nav>
  )
}

export default NavBar
