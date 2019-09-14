import React from 'react'
import cn from '../../utils/classNames'
import './Button.css'

const Button = ({ 
  children, 
  className,
  ...props
}) => {
  return (
    <button 
      className={cn('Button', className)}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button