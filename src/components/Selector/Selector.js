import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from '../../utils/classNames'
import { evaluate } from '../../utils/props'
import Button from '../Button/Button'

import './Selector.css'

const Selector = ({ 
  children,
  className,
  options = [], 
  onChange = () => {},
  value = null,
  title
}) => {
  const [active, setActive] = useState(false)
  const [selected, setSelected] = useState(evaluate(value))

  return (
    <Button
      focus={() => active}
      className={cn('Selector', {}, className)}
      onClick={() => setActive(!active)}
      onPointerLeave={() => setActive(false)}
    >
      {children}
      <div className={cn('Selector__list', { active })}>
        <div className="Selector__list-title">{title}</div>
        <ul className="Selector__list-options">
          {options.map(option => {
            const active = option.value === selected
            return (
              <div
              key={option.value}
              className={cn(
                'Selector__option-item',
                { active }
              )}
              onClick={() => {
                setActive(false)
                setSelected(option.value)
                onChange(option.value)
              }}
            >
              {active && <FontAwesomeIcon size="xs" icon="check" style={{ marginRight: '2px' }} />}
              {option.label}
            </div>
            )
          })}
        </ul>
      </div>
    </Button>
  )
}

export default Selector
