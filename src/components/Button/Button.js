import React, { useState } from 'react'
import cn from '../../utils/classNames'
import './Button.css'

const Button = ({
  active = false,
  children, 
  className,
  onPointerEnter = () => {},
  onPointerLeave = () => {},
  ...props
}) => {
  if (typeof active === 'function') {
    active = active()
  }
  const [activated, setActivated] = useState(active)

  return (
    <button 
      className={cn('Button', activated && 'Button--active', className)}
      onPointerEnter={(e) => {
        setActivated(true)
        onPointerEnter(e)
      }}
      onPointerLeave={(e) => {
        setActivated(false)
        onPointerLeave(e)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button