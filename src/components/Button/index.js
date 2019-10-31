import React from 'react'

import './style.css'

// type options: primary, secondary
const Button = ({type="primary", children, ...props}) => (
  <button className={`sage-button sage-button--${type}`} {...props}>
    {children}
  </button>
)

export default Button
