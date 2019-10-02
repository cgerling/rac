import React from 'react'
import PropTypes from 'prop-types'
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

Progress.propTypes = {
  className: PropTypes.string,
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onSkip: PropTypes.func,
}

export default Progress
