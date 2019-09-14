import React, { useState } from 'react'
import Button from '../Button/Button'

import './Selector.css'

const Selector = ({ 
  children,
  options = [], 
  onChange = () => {},
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Button
      active={() => open}
      className="Selector"
      onClick={() => setOpen(!open)}
      onPointerLeave={() => setOpen(false)}
    >
      {children}
      {
        open && (
          <div className="Selector__list">
            {options.map(option => (
              <div
                key={option.value}
                className="Selector__list-item" 
                onClick={() => {
                  setOpen(false)
                  onChange(option.value)
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )
      }
    </Button>
  )
}

export default Selector
