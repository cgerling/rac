import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cn from '../../utils/classNames'
import {evaluate} from '../../utils/props'
import './Overlay.css'

const Overlay = ({className, children, initial = false}) => {
  initial = evaluate(initial)
  const [active, setActive] = useState(Boolean(initial))

  return (
    <div
      className="Overlay"
      onPointerEnter={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
    >
      <div className={cn('Overlay__container', {active}, className)}>
        {children}
      </div>
    </div>
  )
}

Overlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  initial: PropTypes.bool,
}

export default Overlay
