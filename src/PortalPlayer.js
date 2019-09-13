import React from 'react'
import cn from './utils/classNames'
import './PortalPlayer.css'

const Portal = ({
  className,
  src,
}) => {
  return (
    <div className={cn('PortalPlayer', className)}>
      <video src={src} />
    </div>
  )
}

export default Portal
