import React from 'react'

import './style.css'

// size options are: small, large
const Modal = ({ title, onClose, children, size="large", isOpen=false, warning=false, className }) => {
  const getClassname = () => {
    const warningName = warning ? ' sage-modal--warning' : ''
    return warningName + ` sage-modal--${size} ` + className
  }

  return (
    <div className={`sage-modal--base ${isOpen ? 'sage-modal--open': ''}`}>
      <div className={`sage-modal ${getClassname()}`}>
        <div className="sage-modal--heading">
          {title}
          <div className="sage-modal--close" onClick={onClose}/>
        </div>
        <div className="sage-modal--body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
