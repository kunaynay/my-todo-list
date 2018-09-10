import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({label, name, value, placeholder, type, onChange, error}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      
    </div>
  )
}
