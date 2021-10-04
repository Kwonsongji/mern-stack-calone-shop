import * as actionTypes from '../constants/productConstants';

const initialStateForGetProducts = {
  products: []
};
export const getProductsReducer = (state = initialStateForGetProducts, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products:[] 
      }
    case actionTypes.GET_PRODUCTS_SUCESS:
      return {
        loading: false,
        products: action.payload
      }
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload //on veut afficher l'erreur
      } 
    default:
      return state;
  }
}

const initialStateForGetOneProduct = {
  product: {}
}
export const getProductDetailsReducer = (state = initialStateForGetOneProduct, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      }
    case actionTypes.GET_PRODUCT_DETAILS_SUCESS:
      return {
        loading: false,
        product: action.payload
      }
      case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
      product: {}
      } 
    default:
      return state;
  }
}