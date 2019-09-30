import React, {useState} from 'react'
import FontAwesomeIcon from '../Icon/Icon'
import cn from '../../utils/classNames'
import {evaluate} from '../../utils/props'
import ToggleButton from '../ToggleButton/ToggleButton'

import './Volume.css'

const Volume = ({initial = 100, onChange = () => {}}) => {
  const [open, setOpen] = useState(false)
  const [level, setLevel] = useState(evaluate(initial))
  const [muted, setMuted] = useState(false)

  let value = muted ? 0 : level
  return (
    <div
      className="Volume"
      onPointerEnter={() => setOpen(true)}
      onPointerLeave={() => setOpen(false)}
    >
      <ToggleButton
        className="Volume__toggle"
        value={() => value}
        onChange={active => {
          const muted = !active
          setMuted(muted)
          const value = muted ? 0 : level
          onChange(value)
        }}
      >
        {active => {
          let icon = 'volume-up'
          if (!active) {
            icon = 'volume-mute'
          } else if (value <= 30) {
            icon = 'volume-off'
          } else if (value > 30 && value <= 60) {
            icon = 'volume-down'
          }

          return <FontAwesomeIcon fixedWidth icon={icon} />
        }}
      </ToggleButton>
      <input
        className={cn('Volume__slider', {active: open})}
        type="range"
        step="1"
        min="0"
        max="100"
        value={value}
        onChange={e => {
          value = Number.parseInt(e.target.value, 10)
          setLevel(value)
          setMuted(false)
          onChange(value)
        }}
      />
    </div>
  )
}

export default Volume
