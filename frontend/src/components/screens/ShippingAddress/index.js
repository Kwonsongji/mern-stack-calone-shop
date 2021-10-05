import React, { useState} from "react";
import { useDispatch, useSelector  } from "react-redux";
import { saveShippingAddress } from "../../../redux/actions/cartActions";
import CheckoutSteps from "../../CheckoutSteps";
import './style.scss';

const ShippingAddress = (props) => {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!userInfo) {
    // eslint-disable-next-line react/prop-types
    props.history.push('/connexion');
  }
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch save shipping adress
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
      // eslint-disable-next-line react/prop-types
      props.history.push('/paiement'); // renvoi à la page paiment 
  };


  return (
    <div className="shipping-adress__container">
      <CheckoutSteps step1 step2 />
      <form
        className="shipping-adress__form"
        onSubmit={submitHandler}    
      >
        <div>
        <h1 className="shipping-adress__title"> Adresse d&apos;expédition</h1>
        </div>
        <div className="shipping-adress__inputBox">
          <label className="shipping-adress__label" htmlFor="fullName"> Nom et Prénom :</label>
          <input
            type="text"
            id="fullName"
            placeholder="Entrez votre Nom et Prénom"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div className="shipping-adress__inputBox">
          <label className="shipping-adress__label" htmlFor="adress"> Adresse :</label>
          <input
            type="text"
            id="adress"
            placeholder="Entrez adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div className="shipping-adress__inputBox">
          <label className="shipping-adress__label" htmlFor="city"> Ville :</label> 
          <input
            type="text"
            id="city"
            placeholder="Entrez votre Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div className="shipping-adress__inputBox">
          <label  className="shipping-adress__label" htmlFor="fullName"> Code Postal :</label>
          <input
            type="text"
            id="postalCode"
            placeholder="Entrez votre Code Postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div className="shipping-adress__inputBox">
          <label className="shipping-adress__label" htmlFor="country"> Pays :</label>
          <input
            type="text"
            id="country"
            placeholder="Entrez votre Pays"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
        <div className="shipping-adress__inputBox">
          <label />
          <button
            className="primary shipping-adress__inputBox__button"
            type="submit"
          >
            Continuer
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default ShippingAddress;
