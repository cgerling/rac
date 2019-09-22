import React, { useState } from 'react'
import cn from '../../utils/classNames'
import { format } from '../../utils/time'

import './TimeLine.css'

const toPercentage = (value, of) => ((value / of) * 100) + '%'

const mouseDistance = (e) => {
  const { left, width } = e.target.getBoundingClientRect()
  let mousePosition = e.pageX - left
  if (mousePosition > width) {
    mousePosition = width
  }

  return mousePosition / width
}

const TimeLine = ({
  className,
  duration = 0,
  time = 0,
  onSkip = () => {}
}) => {
  const [hover, setHover] = useState({ show: false, time: 0 })

  return (
    <div className={cn('TimeLine__track', {}, className)}>
      <div 
        className={cn('TimeLine__hover-track', { active: hover.show })}
        onClick={(e) => onSkip(hover.time)}
        onMouseEnter={() => setHover(hover => ({ ...hover, show: true }))}
        onMouseMove={(e) => {
          const distance = mouseDistance(e)
          const time = distance * duration
          setHover(hover => ({ ...hover, time }))
        }}
        onMouseLeave={() => setHover(hover => ({ ...hover, show: false }))}
      >
        <div 
          className={cn('TimeLine__hover-info', { visible: hover.show })}
          style={{ left: toPercentage(hover.time, duration) }}
        >
          <div className={cn('TimeLine__hover-notch', { inverted: hover.time < time })} />
          <div className="TimeLine__hover-time">
            {format(hover.time)}
          </div>
        </div>
      </div>
      <div className="TimeLine__scrubbed" style={{ width: toPercentage(time, duration) }}></div>
    </div>
  )
}

export default TimeLine
