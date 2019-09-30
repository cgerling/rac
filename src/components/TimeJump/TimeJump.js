import React from 'react'
import FontAwesomeIcon from '../../Icon/Icon'
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

export default {
  Forward,
  Backward,
}
