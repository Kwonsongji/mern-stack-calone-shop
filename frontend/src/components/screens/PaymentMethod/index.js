/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './style.scss';
import { savePaymentMethod } from "../../../redux/actions/cartActions";
import CheckoutSteps from '../../CheckoutSteps';


const PaymentMethod = (props) => {
    //pour recupérer les données du cart dans le store
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
   props.history.push('/adresse-expedition')
  }
  //enregistrer les nouvelles données et on dispatch l'action
  const [paymentMethod, setPaymentMethod] = useState('Paypal');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push('/passer-la-commande');
  }

  return (
    <div className="payment-method">
      <CheckoutSteps step1 step2 step3></CheckoutSteps >
        <form
          className="payment-method__form"
          onSubmit={submitHandler}     
        >
          <div>
            <h1  className="payment-method__form__title"> Méthode de Paiement</h1>
          </div>
           <div>
          <div className="payment-method__form__labelBox">
             <label
              htmlFor="paypal"
              className="payment-method__form__label"
            >Paypal</label>
            <input
                className="payment-method__form__inputBox "
                type="radio"
                id="paypal"
                value="Paypal"
                name="paymentMethod"
                required checked
                onChange={(e) => setPaymentMethod(e.target.value)}   
              />
            </div>
          </div>
          <div>
          <div className="payment-method__form__labelBox">
            <label
              htmlFor="stripe"
              className="payment-method__form__label "
            >Stripe</label>
            <input
                className="payment-method__form__inputBox "
                type="radio"
                id="stripe"
                value="Stripe"
                name="paymentMethod"
                required 
                onChange={(e) => setPaymentMethod(e.target.value)}   
              />
            </div>
          </div>
            

            <div>
              <button
                className="primary payment-method__form__button"
                type="submit"
              >
                Continuer
              </button>
            </div>
        </form>
    </div>
  );
}

export default PaymentMethod;