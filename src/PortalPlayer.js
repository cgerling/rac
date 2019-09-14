import React, { useRef } from 'react'
import cn from './utils/classNames'
import { Maximize, Minimize, Play, Pause } from 'react-feather'
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
          className="PortalPlayer__playback-button"
          initial={() => videoRef.current && !videoRef.current.paused}
          onChange={(active) => {
            if (!active) {
              return videoRef.current.pause()
            }
            
            return videoRef.current.play().then(console.info.bind(console), console.error.bind(console))
          }}
        >
          {(active) => {
            if (!active) {
              return <Play />
            }

            return <Pause />
          }}
        </ToggleButton>
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
            if (!active) {
              return <Maximize />
            }

            return <Minimize />
          }}
        </ToggleButton>
      </Overlay>
    </div>
  )
}

export default Portal
