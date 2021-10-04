/* eslint-disable no-case-declarations */
import * as actionTypes from '../constants/cartConstants';

const initialState = {
  cartItems:[]
};
// Le state par défaut est l'état initial, 
//l'action par défaut est un objet vide.
export const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //1)°) ajout du produit au panier ( nouvelle donné )
      const itemAdd = action.payload; console.log('ajout du nouvelle item *itemAdd*', itemAdd);
      //2°) check si le produit existe bien dans le panier avec l'id 
      const existItem = state.cartItems.find((x) => x.product === itemAdd.product);
      console.log('check si le produit existe bien dans le panier avec l\' id *existItem*' , existItem);
      if (existItem) {
        return {
          ...state, //on copie state initial non modifié pour accèder à la propriété cartItems
          cartItems: state.cartItems.map((x) => x.product === existItem.product ? itemAdd : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemAdd],// ajout du nouveau item dans l'array 
        };  
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload)
      };
     case actionTypes.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      };
    case actionTypes.CART_EMPTY:
      return {
        ...state,
        error:'',
        cartItems: []
      };
      
    default:
      return state;
  }
  
}