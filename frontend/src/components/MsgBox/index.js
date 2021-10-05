/* eslint-disable react/prop-types */
import React from 'react'

const MsgBox = (props ) => {
  return (
    <div className={`alert alert-${props.variant || 'info'}`}>
      {props.children}
    </div>
  )
}

export default MsgBox;
