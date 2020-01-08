import React from 'react'
import PropTypes from 'prop-types'
import cn from '../../utils/classNames'
import evaluate from '../../utils/props'
import './Button.css'

const Button = ({active = false, children, className, ...props}) => {
  active = evaluate(active, Boolean)

  return (
    <button className={cn('Button', {active}, className)} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  active: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  children: PropTypes.node,
  className: PropTypes.string,
  onPointerEnter: PropTypes.func,
  onPointerLeave: PropTypes.func,
  onPointerOut: PropTypes.func,
}

export default Button
