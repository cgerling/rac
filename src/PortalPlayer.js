import React from 'react'
import './PortalPlayer.css'

const Portal = ({
  src,
}) => {
  return (
    <div className="PortalPlayer">
      <video src={src} />
    </div>
  )
}

export default Portal
