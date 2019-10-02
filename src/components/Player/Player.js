import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '../Icon/Icon'
import {cn} from '../../utils/classNames'
import Overlay from '../Overlay/Overlay'
import ToggleButton from '../ToggleButton/ToggleButton'
import Selector from '../Selector/Selector'
import Volume from '../Volume/Volume'
import Progress from '../Progress/Progress'
import TimeJump from '../TimeJump/TimeJump'

import './Player.css'

const Player = ({className, src}) => {
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
      value: 'off',
    },
    {
      label: 'English',
      value: 'en-us',
    },
    {
      label: 'Spanish',
      value: 'es-es',
    },
    {
      label: 'Português',
      value: 'pt-br',
    },
    {
      label: 'Import...',
      value: 'new',
    },
  ]

  return (
    <div className={cn('Rac', className)} ref={playerRef}>
      <video className="Rac__video" ref={videoRef} src={src} />
      <Overlay className="Rac__overlay">
        <div className="Rac__playback">
          <TimeJump.Backward
            className="Rac__skip-time"
            time={5}
            onClick={time => (videoRef.current.currentTime += time)}
          />
          <ToggleButton
            className="Rac__playback-button"
            value={() => videoRef.current && !videoRef.current.paused}
            onChange={active => {
              if (!active) {
                return videoRef.current.pause()
              }

              return videoRef.current.play()
            }}
          >
            {active => {
              if (!active) {
                return <FontAwesomeIcon icon="play" />
              }

              return <FontAwesomeIcon icon="pause" />
            }}
          </ToggleButton>
          <TimeJump.Forward
            className="Rac__skip-time"
            time={5}
            onClick={time => (videoRef.current.currentTime += time)}
          />
        </div>
        <div className="Rac__controls">
          <Selector
            className="Rac__subtitles-selector"
            title="Subtitles"
            options={options}
            value="off"
            onChange={value => setSubtitle(value)}
          >
            <FontAwesomeIcon icon="comment-alt" />
          </Selector>
          <Progress
            className="Rac__progress-bar"
            initial={0}
            time={currentTime}
            duration={duration}
            onSkip={time => (videoRef.current.currentTime = time)}
          />
          <Volume
            className="Rac__volume"
            onChange={level => {
              const volume = level / 100
              videoRef.current.volume = volume
              videoRef.current.muted = volume === 0
            }}
          />
          <ToggleButton
            className="Rac__screen-toggle"
            initial={document.fullscreenElement}
            onChange={active => {
              if (!active) {
                return document.exitFullscreen()
              }

              return playerRef.current.requestFullscreen({navigationUI: 'hide'})
            }}
          >
            {active => {
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

Player.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Player
