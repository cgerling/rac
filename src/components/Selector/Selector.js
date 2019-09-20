import React, { useState } from 'react'
import { Check } from 'react-feather'
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
        {options.map(option => (
          <div
            key={option.value}
            className={cn(
              'Selector__list-item', 
              { selected: option.value === selected }
            )}
            onClick={() => {
              setActive(false)
              setSelected(option.value)
              onChange(option.value)
            }}
          >
            {option.value === selected && <Check size={12}/>}
            {option.label}
          </div>
        ))}
      </div>
    </Button>
  )
}

export default Selector
