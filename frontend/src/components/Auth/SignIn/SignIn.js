/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MsgBox  from '../../MsgBox';
import  LdgBox  from '../../LdgBox/index'
import { signin } from '../../../redux/actions/userActions';
import './style.scss';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;// add datas

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password)) //from signinaction 
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo] ); //charger les données user
  return (
    <div className="signIn__main">
      <div className="signIn__body">
        <section className="signIn__section" >
         
          <div className="signIn__box">
            <div className="signIn__container">
              <form
                className="signIn__form"
                onSubmit={submitHandler}
              >
        <div>
          <h1 className="signIn__title">Connexion </h1>
        </div>
                <div>
            
            <div className="signIn__inputBox">
                    {/*               <label htmlFor="email"> Addresse Email</label> */}
                    {loading && <LdgBox> </LdgBox> }
              {error && <MsgBox variant="danger">{error}</MsgBox>}
                <input
                  type="email"
                  id="email"
                  className="signIn__mail"
                  placeholder="Entrer un  email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  ></input>
            </div>
        </div>
           <div>
              <div className="signIn__inputBox">

          <input
            type="password"
            id="password"
            className="signIn__password"
            placeholder="Entrer le mot de passe"
            required
            onChange={(e) => setPassword(e.target.value)}
                    ></input>
          </div>
        </div>
        <div>
              <div className="signIn__inputBox">
                    <input 
                      type="submit" 
                      value="connexion"
                      />
              </div>
           <p className="forget">
                      Mot de Passe oublié ?
                    <NavLink
                      className="nav-item "
                      to="/changer-son-mot-de-passe"
                      activeClassName="nav-item--active"
                    >
                      Cliquez là
                    </NavLink>
          </p>
          <p className="forget">
                     Pas encore de compte ?
                    <NavLink
                      className="nav-item "
                      to={`/inscription?redirect=${redirect}`}
                      activeClassName="nav-item--active"
                    >
                    s&#39;inscrire
                    </NavLink>
                    </p>
        </div>
              </form>
              </div>
            </div>
           
          </section>
        </div>
    </div>
  )
}

export default SignIn;
