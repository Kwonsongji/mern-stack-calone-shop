import * as actionTypes from '../constants/userConstant';
const initialStateForUser = {
};

export const userSigninReducer = (state = initialStateForUser, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload /* vient d'userActions, ce sont les datas côté back */};
    case actionTypes.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userSignupReducer = (state = initialStateForUser, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload /* vient d'userActions, ce sont les datas côté back */};
    case actionTypes.USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};