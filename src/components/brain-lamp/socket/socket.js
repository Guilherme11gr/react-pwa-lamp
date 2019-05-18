import React from 'react'
import './socket.scss'

const Socket = () => {
  return (
    <svg>
      <g id="socket">
        <rect id="bocal-superior" 
              data-name="&lt;bocal_superior&gt;" 
              className="cls-1"
              x="110.41" y="315.26" 
              width="69.59" 
              height="19.09" 
              rx="9.55" ry="9.55" />
        <rect id="bocal-medio" 
              data-name="&lt;bocal_medio&gt;"
              className="cls-1"
              x="102.63" y="287.42" 
              width="85.16" 
              height="19.09" 
              rx="9.55" 
              ry="9.55" />

        <path id="bocal-inferior" 
              data-name="&lt;bocal_inferior&gt;" 
              className="cls-1"
              d="M278.07,344.5H235.94a9.55,9.55,0,1,0,0,19.09h5.91a9.51,9.51,0,0,0,9,12.72h12.33a9.56,9.56,0,0,0,9.54-9.54,9.28,9.28,0,0,0-.56-3.18h5.92a9.55,9.55,0,1,0,0-19.09Z"
              transform="translate(-111.8 -.6)" />
      </g>
    </svg>
  )
}

export default Socket
