import React from 'react'
import './icons.svg'

const Icon = props => (
  <svg className={`icon icon-${props.name}`}>
    <use xlinkHref={`#${props.name}`} />
  </svg>
)

export default Icon
