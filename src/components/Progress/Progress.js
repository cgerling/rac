import React from 'react'
import cn from '../../utils/classNames'
import {format} from '../../utils/time'
import {evaluate} from '../../utils/props'
import TimeLine from '../TimeLine/TimeLine'

import './Progress.css'

const Progress = ({className, time, duration, onSkip}) => {
  time = evaluate(time)
  duration = evaluate(duration)

  return (
    <div className={cn('Progress', {}, className)}>
      <div className="Progress__time">{format(time)}</div>
      <TimeLine
        className="Progress__track"
        onSkip={onSkip}
        time={time}
        duration={duration}
      />
      <div className="Progress__time">-{format(duration - time)}</div>
    </div>
  )
}

export default Progress
