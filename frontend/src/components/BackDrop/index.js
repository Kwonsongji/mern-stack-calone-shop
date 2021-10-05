/* eslint-disable react/prop-types */
import React from 'react';
import './style.scss';

const Backdrop = ({show, click }) => {
  return show && <div className="backdrop" onClick={click}> </div>
  
}

export default Backdrop;
