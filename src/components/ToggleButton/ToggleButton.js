import React, { useState } from 'react'
import cn from '../../utils/classNames'
import Button from '../Button/Button'

const ToggleButton = ({ 
  children, 
  className,
  onChange = () => {},
  initial = false
}) => {
  if (typeof initial === 'function') {
    initial = initial()
  }
  const [active, setActive] = useState(Boolean(initial))

  return (
    <Button
      className={cn('ToggleButton', className)}
      onClick={() => {
        const value = !active
        setActive(value)
        onChange(value)
      }}
    >
      {children && children(active)}
    </Button>
  )
}

export default ToggleButton
