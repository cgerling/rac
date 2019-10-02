import React from 'react'
import PropTypes from 'prop-types'
import cn from '../../utils/classNames'

import './Loader.css'

const Loader = ({className}) => {
  return (
    <div className={cn('Loader', {}, className)}>
      <svg className="Loader__container" viewBox="25 25 50 50">
        <circle className="Loader__circle" cx="50" cy="50" r="20" />
      </svg>
    </div>
  )
}

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
