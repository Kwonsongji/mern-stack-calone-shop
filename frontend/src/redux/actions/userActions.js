import * as actionTypes from '../constants/userConstant';
import axios from 'axios';

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post('/api/users/signin', { email, password });
    dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data)); // on conserve les données du user même si la fenêtre est fermée 
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message // détail de l'err
          : error.message, //message d'err général 
    });
  }
};
export const signup = (name, email, password) => async (dispatch) => {
  dispatch({ type: actionTypes.USER_SIGNUP_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await axios.post('/api/users/register', {
      name,
      email,
      password
    });
    dispatch({ type: actionTypes.USER_SIGNUP_SUCCESS, payload: data });
  dispatch({ type: actionTypes.USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data)); // on conserve les données du user même si la fenêtre est fermée 
  } catch (error) {
    dispatch({
      type: actionTypes.USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message // détail de l'err
          : error.message, //message d'err général 
    });
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  localStorage.removeItem('shippingAdress')
  dispatch({ type: actionTypes.USER_SIGNOUT });
};