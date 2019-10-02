import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {cn} from '../../utils/classNames'
import {evaluate} from '../../utils/props'
import Button from '../Button/Button'

const ToggleButton = ({
  children,
  className,
  onChange = () => {},
  value = false,
  ...props
}) => {
  value = evaluate(value)
  const [enabled, setEnabled] = useState(Boolean(value))

  return (
    <Button
      className={cn('ToggleButton', className)}
      onClick={() => {
        setEnabled(!enabled)
        onChange(!enabled)
      }}
      {...props}
    >
      {children && children(enabled)}
    </Button>
  )
}

ToggleButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
}

export default ToggleButton
