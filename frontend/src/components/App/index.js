/* eslint-disable react/prop-types */
import './style.scss';
import React from 'react';
import { useState } from 'react'; // hook d'état

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// Screens
import HomeScreen from '../screens/Home/index';
import ProductScreen from '../screens/Product/index.js';
import CartScreen from '../screens/Cart/index.js';
import ShippingAddress from '../screens/ShippingAddress/index.js';
import PaymentMethod from '../screens/PaymentMethod/index.js'
//import PlaceOrder from '../screens/PlaceOrder/index.js';
//import Order from '../screens/Order/index.js';


// menu
import Backdrop from '../BackDrop'; 
import SideDrawer from '../SideDrawer'; 


// Components
import SignIn from '../Auth/SignIn/SignIn.js';
import User from '../screens/User';
import SignUp from '../Auth/SignUp/index.js';


import NotFound from '../NotFound';
import NavBar from '../NavBar';


import Advices from '../Advices';
import Partneship from '../Partnership';
import About from '../About'
import LegalNotices from '../LegalNotices';




const App = () => {

   const [sideToggle, setSideToggle] = useState(false);
    //const productId = props.match.params;
  return (
    < Router >
    {/* <div className="app"> */}
      <NavBar click={() => setSideToggle(true) }/>
 {/*      < User/> */}
      <SideDrawer show={sideToggle} click={ () => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/inscription" component={SignUp}></Route>
          <Route exact path="/connexion" component={SignIn}></Route>
          <Route exact path="/adresse-expedition" component={ShippingAddress}></Route>
          <Route exact path="/paiement" component={PaymentMethod}></Route>
  {/*         <Route exact path="/passer-la-commande" component={PlaceOrder}></Route>
          <Route exact path="/commande/produit:id" component={Order}></Route> */}
          <Route exact path="/" component={User}></Route>
          <Route exact path="/produit/:id" component={ProductScreen}></Route>
          <Route exact path="/panier" component={CartScreen}></Route>
          <Route exact path="/conseil-et-entretien" component={Advices}></Route>
          <Route exact path="/à-propos" component={About}></Route>
          <Route exact path="/mentions-légales"component={LegalNotices}></Route>
          <Route exact path="/partenariat" component={Partneship}></Route>
          <Route exact path="*" component={NotFound}></Route>
        </Switch>
      </main>
      
      {/* </div> */}
    </Router>
  );
}

export default App;
