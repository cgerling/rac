import React, { useRef } from 'react'
import cn from './utils/classNames'

import './PortalPlayer.css'

const Portal = ({
  className,
  src,
}) => {
  const playerRef = useRef()
  const videoRef = useRef()

  return (
    <div 
      className={cn('PortalPlayer', className)}
      ref={playerRef}
    >
      <video 
        className="PortalPlayer__video" 
        ref={videoRef} 
        src={src} 
      />
    </div>
  )
}

export default Portal
