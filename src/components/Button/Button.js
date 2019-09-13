import React from 'react'
import cn from '../../utils/classNames'
import './Button.css'

const Button = ({ 
  children, 
  className,
  onClick = () => {} 
}) => {
  return (
    <button 
      className={cn('Button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button