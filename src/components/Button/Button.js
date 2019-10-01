import React, {useState} from 'react'
import cn from '../../utils/classNames'
import {evaluate} from '../../utils/props'
import './Button.css'

const Button = ({
  focus = false,
  children,
  className,
  onPointerEnter = () => {},
  onPointerLeave = () => {},
  ...props
}) => {
  focus = evaluate(focus)
  const [active, setActive] = useState(Boolean(focus))

  return (
    <button
      className={cn('Button', {active}, className)}
      onPointerEnter={e => {
        setActive(true)
        onPointerEnter(e)
      }}
      onPointerLeave={e => {
        setActive(false)
        onPointerLeave(e)
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
