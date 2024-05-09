import { useState } from 'react'

import './explorer.css'
import ColourSquare from './colourSquare'

function Explorer() {
  const [green, setGreen] = useState(8)

  return (
    <>
      <div>
        <ColourSquare colour="white"/>
        <ColourSquare colour="green"/>
      </div>
      <h1>9 bit colours</h1>
      <h2>An explorer</h2>
      <div className="card">
        <button onClick={() => setGreen((green) => green + 1)}>
          Up
        </button>
        Green: {green}
        <button onClick={() => setGreen((green) => green - 1)}>
          Down
        </button>
      </div>
    </>
  )
}

export default Explorer
