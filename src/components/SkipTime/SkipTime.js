import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cn } from '../../utils/classNames'
import Button from '../Button/Button'

const SkipTime = ({
  className,
  icon,
  onClick = () => {},
  rotation,
  skip,
}) => {
  return (
    <Button
      className={cn('SkipTime', {}, className)}
      onClick={() => onClick(skip)}
    >
      <FontAwesomeIcon icon={icon} transform={`rotate-${rotation}`} />
    </Button>
  )
}

const Forward = ({ skip, ...props}) => (
  <SkipTime {...props} icon="redo-alt" rotation={-45} skip={skip} />
)

const Backward = ({ skip, ...props}) => (
  <SkipTime {...props} icon="undo-alt" rotation={45} skip={skip * -1} />
)

export default {
  Forward,
  Backward,
}
