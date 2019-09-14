import React, { useRef } from 'react'
import cn from './utils/classNames'
import { Maximize, Minimize } from 'react-feather'
import Overlay from './components/Overlay/Overlay'
import ToggleButton from './components/ToggleButton/ToggleButton'

import './PortalPlayer.css'

const Portal = ({
  className,
  src,
}) => {
  const playerRef = useRef(null)
  const videoRef = useRef(null)

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
      <Overlay>
        <ToggleButton
          className="PortalPlayer__screen-toggle"
          initial={document.fullscreenElement}
          onChange={(active) => {
            if (!active) {
              return document.exitFullscreen()
            }
            
            return playerRef.current.requestFullscreen({ navigationUI: 'hide' })
          }}
        >
          {(active) => {
            if (active) {
              return <Minimize />
            }

            return <Maximize />
          }}
        </ToggleButton>
      </Overlay>
    </div>
  )
}

export default Portal
