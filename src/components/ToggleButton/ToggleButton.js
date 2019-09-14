import React, { useState } from 'react'
import cn from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import Button from '../Button/Button'

const ToggleButton = ({ 
  children, 
  className,
  onChange = () => {},
  value = false,
  ...props
}) => {
  const [active, setActive] = useState(Boolean(evaluate(value)))

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
