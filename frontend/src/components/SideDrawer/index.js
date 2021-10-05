/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import './style.scss'

const Sidedrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <NavLink
            to="/panier"
            activeClassName="nav-item--active">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="sidedrawer__cartbadge "> {getCartCount()} </span>
            </span>
          </NavLink>
        </li>
           <li>
          <NavLink
                className="nav-item navbar_list_link navbar_link_signin"
                to="/connexion"
                activeClassName="nav-item--active"
          >
            <p className="navbar_signin_title"> Connexion </p>
            
            <i class="fas fa-person-booth"></i>

            </NavLink>
        </li>
             <li>
          <NavLink
            className= ""
            to="/produits"
            activeClassName="nav-item--active">
            Shop
          </NavLink>
        </li>
         <li>
          <NavLink
            className= ""
            to="/conseil-et-entretien"
            activeClassName="nav-item--active">
            Conseil et entretien
          </NavLink>
        </li>
          <li>
          <NavLink
            className= ""
            to="/partenariat"
            activeClassName="nav-item--active">
           Partenariat
          </NavLink>
        </li>
         <li>
          <NavLink
            className= ""
            to="/à-propos"
            activeClassName="nav-item--active">
           À propos
          </NavLink>
        </li>
           <li>
          <NavLink
            className= ""
            to="/partenariat"
            activeClassName="nav-item--active">
          Mentions Légales
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidedrawer;
