import React, { useState } from 'react'
import cn from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import { format } from '../../utils/time'

import './Progress.css'

const toPercentage = (value, of) => ((value / of) * 100) + '%'

const mouseDistance = (e) => {
  const { left, width } = e.target.getBoundingClientRect()
  let mousePosition = e.pageX - left
  if (mousePosition > width) {
    mousePosition = width
  }

  return mousePosition / width
}

const Progress = ({
  className,
  initial,
  time,
  duration,
  onSkip = () => {}
}) => {
  time = evaluate(time || initial)
  duration = evaluate(duration)

  const [hover, setHover] = useState({ show: false, time: 0 })

  return (
    <div className={cn('Progress', {}, className)}>
      <div className="Progress__time">{format(time)}</div>
      <div 
        className="Progress__track" 
        onClick={(e) => {
          const distance = mouseDistance(e)
          onSkip(distance)
        }}
      >
        <div 
          className={cn("Progress__hover-track", { active: hover.show })}
          onMouseEnter={() => setHover(hover => ({ ...hover, show: true }))}
          onMouseMove={(e) => {
            const distance = mouseDistance(e)
            const time = distance * duration
            setHover(hover => ({ ...hover, time }))
          }}
          onMouseLeave={() => setHover(hover => ({ ...hover, show: false }))}
        >
          <div 
            className={cn('Progress__hover-info', { visible: hover.show })}
            style={{ left: toPercentage(hover.time, duration) }}
          >
            <div className={cn('Progress__hover-notch', { inverted: hover.time < time })} />
            <div className="Progress__hover-time">
              {format(hover.time)}
            </div>
          </div>
        </div>
        {/* <div className="Progress__thumb"></div> */}
        <div className="Progress__scrubbed" style={{ width: toPercentage(time, duration) }}></div>
      </div>
      <div className="Progress__time">-{format(duration - time)}</div>
    </div>
  )
}

export default Progress
