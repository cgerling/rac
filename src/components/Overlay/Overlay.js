import React, { useState } from 'react'
import { cn } from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import './Overlay.css'

const Overlay = ({ 
  className,
  children,
  initial = false
}) => {
  initial = evaluate(initial)
  const [active, setActive] = useState(Boolean(initial))

  return (
    <div 
      className={cn('Overlay', className)}
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      {active && children}
    </div>
  )
}

export default Overlay
