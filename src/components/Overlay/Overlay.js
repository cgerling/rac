import React, { useState } from 'react'
import cn from '../../utils/classNames'
import './Overlay.css'

const Overlay = ({ className, children, }) => {
  const [visible, setVisible] = useState(false)

  return (
    <div 
      className={cn('Overlay', className)}
      onPointerEnter={() => setVisible(true)}
      onPointerLeave={() => setVisible(false)}
    >
      {visible && children}
    </div>
  )
}

export default Overlay
