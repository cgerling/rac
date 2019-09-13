import React, { useState } from 'react'
import cn from '../../utils/classNames'
import Button from '../Button/Button'

const ToggleButton = ({ 
  children, 
  className,
  onChange = () => {} }) => {
  const [active, setActive] = useState(false)

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
