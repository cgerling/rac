import React, { useState } from 'react'
import cn from '../../utils/classNames'
import Button from '../Button/Button'

const ToggleButton = ({ 
  children, 
  className,
  onChange = () => {},
  value = false,
  ...props
}) => {
  if (typeof value === 'function') {
    value = value()
  }
  const [active, setActive] = useState(Boolean(value))

  return (
    <Button
      className={cn('ToggleButton', className)}
      onClick={() => {
        const state = !active
        setActive(state)
        onChange(state)
      }}
      {...props}
    >
      {children && children(active)}
    </Button>
  )
}

export default ToggleButton
