import React, {useState} from 'react'

import './style.css'

// Size options are medium or small
const Input = ({ label, size = "medium", value, className, ...props }) => {
  const [inputValue, setInputValue] = useState(value)
  const onInputChanged = (e) => {
    const val = e.target.value
    setInputValue(val)
    props.onChange && props.onChange(val)
  }

  return (
    <div className={`sage-input--wrapper ${className}`}>
      {label && <div className="sage-input--label">{label}</div>}
      <input
        className={`sage-input sage-input--${size}`}
        {...props}
        value={inputValue}
        onChange={onInputChanged} />
    </div>
  )
}

export default Input
