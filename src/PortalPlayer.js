import React, { useRef, useState } from 'react'
import { cn } from './utils/classNames'
import { Maximize, Minimize, Play, Pause, ChevronsLeft, ChevronsRight, MessageSquare } from 'react-feather'
import Overlay from './components/Overlay/Overlay'
import ToggleButton from './components/ToggleButton/ToggleButton'
import Button from './components/Button/Button'
import Selector from './components/Selector/Selector'
import Volume from './components/Volume/Volume'

import './PortalPlayer.css'

const Portal = ({
  className,
  src,
}) => {
  const playerRef = useRef(null)
  const videoRef = useRef(null)
  const [, setSubtitle] = useState(null)

  const options = [
    {
      label: 'English',
      value: 'en-us'
    },
    {
      label: 'Spanish',
      value: 'es-es'
    },
    {
      label: 'Português',
      value: 'pt-br'
    },
  ]

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
        <div className="PortalPlayer__playback">
          <Button
            className="PortalPlayer__backward-time"
            onClick={() => {
              videoRef.current.currentTime -= 5
            }}
          >
            <ChevronsLeft />
          </Button>
          <ToggleButton
            className="PortalPlayer__playback-button"
            value={() => videoRef.current && !videoRef.current.paused}
            onChange={(active) => {
              if (!active) {
                return videoRef.current.pause()
              }
              
              return videoRef.current.play().then(console.info.bind(console), console.error.bind(console))
            }}
          >
            {(active) => {
              const size = 48
              if (!active) {
                return <Play fill="currentColor" size={size} />
              }

              return <Pause fill="currentColor" size={size} />
            }}
          </ToggleButton>
          <Button
            className="PortalPlayer__forward-time"
            onClick={() => {
              videoRef.current.currentTime += 5
            }}
          >
            <ChevronsRight />
          </Button>
        </div>
        <div className="PortalPlayer__controls">
          <Selector 
            className="PortalPlayer__subtitles-selector"
            options={options} 
            onChange={(value) => setSubtitle(value)}
          >
            <MessageSquare />
          </Selector>
          <Volume
            className="PortalPlayer__volume"
            onChange={(level) => {
              const volume = level / 100
              videoRef.current.volume = volume
              videoRef.current.muted = volume === 0
            }}
          />
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
        </div>
      </Overlay>
    </div>
  )
}

export default Portal
