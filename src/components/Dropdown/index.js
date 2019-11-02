import React, { useState } from 'react'
import Select from 'react-select'

import './style.css'

const Dropdown = ({ options, selected, onChange, className, ...props }) => {
  const [selectedOption, setSelectedOption] = useState(options.find(op => op.value === selected))
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption)
    onChange(selectedOption.value)
  }

  return (
    <Select
      className={`sage-dropdown ${className}`}
      classNamePrefix="sage-dropdown"
      value={selectedOption}
      onChange={handleChange}
      options={options}
      {...props}
    />
  )
}

export default Dropdown
