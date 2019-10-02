import React from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '../Icon/Icon'
import {cn} from '../../utils/classNames'
import Button from '../Button/Button'

const TimeJump = ({className, icon, onClick = () => {}, rotation, time}) => {
  return (
    <Button
      className={cn('TimeJump', {}, className)}
      onClick={() => onClick(time)}
    >
      <FontAwesomeIcon icon={icon} transform={`rotate-${rotation}`} />
    </Button>
  )
}

const Forward = ({time, ...props}) => (
  <TimeJump {...props} icon="redo-alt" rotation={-45} time={time} />
)

const Backward = ({time, ...props}) => (
  <TimeJump {...props} icon="undo-alt" rotation={45} time={time * -1} />
)

TimeJump.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  rotation: PropTypes.number,
  time: PropTypes.number,
}

Forward.propTypes = {
  time: PropTypes.number,
}

Backward.propTypes = {
  time: PropTypes.number,
}

export default {
  Forward,
  Backward,
}
