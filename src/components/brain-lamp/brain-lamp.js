import React from 'react'
import './brain-lamp.scss'
import Brain from './brain/brain';
import Machine from './machine/machine';
import Socket from './socket/socket';

const BrainLamp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="lamp" viewBox="0 0 284.45 379.21">
      <Socket />

      <g className="flicker-5">
        <Machine />

        <Brain />
      </g>
    </svg>
  )
}

export default BrainLamp
