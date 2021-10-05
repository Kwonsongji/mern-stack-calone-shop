/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import MsgBox  from '../../MsgBox';
import  LdgBox  from '../../LdgBox/index'
import { signup } from '../../../redux/actions/userActions';
import './style.scss';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userSignup = useSelector((state) => state.userSignup); // from useractions
  const { userInfo, loading, error } = userSignup;// add datas

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Le mot de passe et la confirmation du mot de passe ne match pas ! ')    
    } else {
    dispatch(signup(name, email, password)) //from signup action      
    }
    
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
    }
  }, [props.history, redirect, userInfo] ); //charger les données user
  return (
    <div className="signUp__main">
      <div className="signUp__body">
        <section className="signUp__section" >
          <div className="signUp__box">
            <div className="signUp__container">
              <form
                className="signUp__form"
                onSubmit={submitHandler}
              >
        <div>
          <h1 className="signUp__title">Créer un compte </h1>
        </div>              
            {loading && <LdgBox> </LdgBox> }
            {error && <MsgBox variant="danger">{error}</MsgBox>}
            <div className="signUp__inputBox">
              <label htmlFor="name"> Nom et Prénom :</label> 
                <input
                  type="text"
                  id="name"
                  className="signUp_name"
                  placeholder="Entrer un nom"
                  required
                  onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
             <div className="signUp__inputBox">
              <label htmlFor="email"> Addresse Email :</label> 
                <input
                  type="email"
                  id="email"
                  className="signUp__mail"
                  placeholder="Entrer un email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  ></input>
            </div>      
            <div className="signUp__inputBox">
              <label htmlFor="password"> Mot de Passe :</label> 
              <input
                type="password"
                id="password"
                className="signUp__password"
                placeholder="Entrer le mot de passe"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
                </div>
            <div className="signUp__inputBox">
              <label htmlFor="confirmPassword "> Confirmation du Mot de Passe :</label> 
              <input
                type="password"
                id="password"
                className="signUp__password"
                placeholder="Confirmation du mot de passe"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
                

        <div>
                  <div className="signUp__inputBox">
                      <input 
                      type="submit"
                      value="s&#39;inscrire"
                      />
              </div>

          <p className="forget">
                     Déjà un compte ?
                    <NavLink
                      className="nav-item "
                      to={`/connexion?redirect=${redirect}`}
                      activeClassName="nav-item--active"
                    >
                  se connecter
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

export default SignUp;
