import React from 'react'

import './style.css'

// type options: primary, secondary
const Button = ({type="primary", children, className, ...props}) => (
  <button className={`sage-button sage-button--${type} ${className}`} {...props}>
    {children}
  </button>
)

export default Button
