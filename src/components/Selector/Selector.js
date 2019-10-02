import React, {useState} from 'react'
import PropTypes from 'prop-types'
import cn from '../../utils/classNames'
import {evaluate} from '../../utils/props'
import Button from '../Button/Button'
import SelectList from '../SelectList/SelectList'

import './Selector.css'

const Selector = ({
  children,
  className,
  options = [],
  onChange = () => {},
  value = null,
  title,
}) => {
  value = evaluate(value)
  const [active, setActive] = useState(false)

  return (
    <Button
      focus={() => active}
      className={cn('Selector', {}, className)}
      onClick={() => setActive(!active)}
      onPointerLeave={() => setActive(false)}
    >
      {children}
      <SelectList
        className={cn('Selector__list', {active})}
        name={title}
        value={value}
        onChange={value => {
          setActive(false)
          onChange(value)
        }}
      >
        {options.map(option => (
          <SelectList.Item key={option.value} value={option.value}>
            {option.label}
          </SelectList.Item>
        ))}
      </SelectList>
    </Button>
  )
}

Selector.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.func]),
  title: PropTypes.string,
}

export default Selector
