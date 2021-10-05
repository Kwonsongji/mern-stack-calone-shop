/* eslint-disable react/prop-types */
import React from "react";


const CheckoutSteps = (props) => {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'checkout-steps__active active' : ''}> Connexion</div>
      <div className={props.step2 ? 'active' : ''}> Expédition</div>
      <div className={props.step3 ? 'active' : ''}> Moyen de Paiement</div>
      <div className={props.step4 ? 'active' : ''}> Ordre de Paiement</div>  
    </div>
  )
}

export default CheckoutSteps
