import React, {useContext, useState, useCallback, useMemo} from 'react'
import FontAwesomeIcon from '../Icon/Icon'
import cn from '../../utils/classNames'
import {evaluate} from '../../utils/props'

import './SelectList.css'

const SelectListContext = React.createContext({})
const useSelectListContext = () => {
  const context = useContext(SelectListContext)
  if (!context) {
    throw new Error(
      'SelectList compound components cannot be rendered outside the SelectList component',
    )
  }

  return context
}

const SelectList = ({
  children,
  className,
  disabled = false,
  name,
  onChange = () => {},
  value = null,
}) => {
  disabled = Boolean(evaluate(disabled))
  value = evaluate(value)

  const [selected, setSelected] = useState(value)
  const select = useCallback(
    item => {
      if (disabled) return
      if (item === selected) return
      setSelected(item)
      onChange(item)
    },
    [disabled, selected, onChange],
  )

  const context = useMemo(
    () => ({
      value: selected,
      select,
    }),
    [selected, select],
  )

  return (
    <div className={cn('SelectList', {disabled}, className)}>
      <p className="SelectList__name">{name}</p>
      <ul className="SelectList__items">
        <SelectListContext.Provider value={context}>
          {children}
        </SelectListContext.Provider>
      </ul>
    </div>
  )
}

const Item = ({children, className, disabled, value = null}) => {
  disabled = Boolean(evaluate(disabled))

  const context = useSelectListContext()
  const selected = value === context.value

  return (
    <li
      className={cn('SelectList__item', {selected, disabled}, className)}
      onClick={() => !disabled && context.select(value)}
    >
      {selected && (
        <FontAwesomeIcon className="SelectList__check" icon="check" />
      )}
      {children}
    </li>
  )
}

SelectList.Item = Item

export default SelectList
