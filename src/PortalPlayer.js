import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from './utils/classNames'
import Overlay from './components/Overlay/Overlay'
import ToggleButton from './components/ToggleButton/ToggleButton'
import Selector from './components/Selector/Selector'
import Volume from './components/Volume/Volume'
import Progress from './components/Progress/Progress'
import SkipTime from './components/SkipTime/SkipTime'

import './PortalPlayer.css'

const Portal = ({
  className,
  src,
}) => {
  const playerRef = useRef(null)
  const videoRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [, setSubtitle] = useState(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateDuration = () => {
      setDuration(video.duration)
    }
    video.addEventListener('loadedmetadata', updateDuration)

    return () => video.removeEventListener('loadedmetadata', updateDuration)
  }, [setDuration])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const updateTime = () => {
      setCurrentTime(video.currentTime)
    }
    video.addEventListener('timeupdate', updateTime)
    return () => video.removeEventListener('timeupdate', updateTime)
  }, [currentTime, setCurrentTime])

  const options = [
    {
      label: 'Off',
      value: 'off'
    },
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
    {
      label: 'Import...',
      value: 'new'
    }
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
      <Overlay className="PortalPlayer__overlay">
        <div className="PortalPlayer__playback">
          <SkipTime.Backward 
            className="PortalPlayer__skip-time"
            skip={5} 
            onClick={time => videoRef.current.currentTime += time} 
          />
          <ToggleButton
            className="PortalPlayer__playback-button"
            value={() => videoRef.current && !videoRef.current.paused}
            onChange={(active) => {
              if (!active) {
                return videoRef.current.pause()
              }
              
              return videoRef.current.play()
            }}
          >
            {(active) => {
              if (!active) {
                return <FontAwesomeIcon icon="play" />
              }

              return <FontAwesomeIcon icon="pause" />
            }}
          </ToggleButton>
          <SkipTime.Forward 
            className="PortalPlayer__skip-time"
            skip={5}
            onClick={time => videoRef.current.currentTime += time}
          />
        </div>
        <div className="PortalPlayer__controls">
          <Selector 
            className="PortalPlayer__subtitles-selector"
            title="Subtitles"
            options={options} 
            value="off"
            onChange={(value) => setSubtitle(value)}
          >
            <FontAwesomeIcon icon="comment-alt" />
          </Selector>
          <Progress 
            className="PortalPlayer__progress-bar"
            initial={0}
            time={currentTime}
            duration={duration}
            onSkip={(percent) => videoRef.current.currentTime = percent * duration}
          />
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
                return <FontAwesomeIcon icon="expand" />
              }

              return <FontAwesomeIcon icon="compress" />
            }}
          </ToggleButton>
        </div>
      </Overlay>
    </div>
  )
}

export default Portal
