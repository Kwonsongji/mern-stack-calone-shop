import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../../redux/actions/userActions';
import './style.scss';

const User = () => {
  const userSignin = useSelector((state) => state.userSignin);// pour récupérer les données du user 
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  //chge color for user content :
  const styles = {
    color: "#86A8E7"
  }

  return (
    <div className="user__signin">
      {
        userInfo ? (
              <div className="user__signin__dropdown">
                <NavLink className="user__signin__name" to="#">
    <i className="fa fa-caret-down" style={styles} /* style={{ color: 'blue' }} */></i>{' '} {userInfo.name}
                </NavLink>
                <ul className="user__signin__dropdown-content">
                  <li>
                    <NavLink className="user__signin__name__dropdown" to="#déconnexion" onClick={signoutHandler}>
                      Déconnexion
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to="/connexion">Connexion</NavLink>
        )
      }
    </div>
  )
}

export default User
