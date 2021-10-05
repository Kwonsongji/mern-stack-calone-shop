import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducer';
import { userSigninReducer, userSignupReducer } from './reducers/userReducer';
import { getProductsReducer, getProductDetailsReducer } from './reducers/productReducer';

const reducer = combineReducers({
  cart: cartReducer, //donne une nouvelle prop à cartReducer
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  userSignin: userSigninReducer, // userSignin call in
  userSignup: userSignupReducer, // constant => action => reducer => store
})
 
const middleware = [thunk] //permet de faire des promesses asynchrones

const cartFromLocalStorage =
  localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];
const shippingAdressFromLocalStore =
  localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};
//garde les datas du user even refresh 
const userInfoFromLocalStorage =
  localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
const paymentMethodFromLocalStorage = 'Paypal'


const INITIAL_STATE = {
  userSignin: {
    userInfo: userInfoFromLocalStorage
  },
  cart: {
    cartItems: cartFromLocalStorage,
    shippingAddress: shippingAdressFromLocalStore,
    paymentMethod: paymentMethodFromLocalStorage 
  },

}
// Pour appliquer un middleware dans notre store, on utilise la fonction applyMiddleware de Redux.
//Puis, on l'ajoute en argument de la fonction createStore.
// Cependant, la fonction createStore ne prend qu'un seul reducer.
// On doit donc utiliser la fonction combineReducers afin de fusionner nos différents reducers.
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware),)
);

export default store;