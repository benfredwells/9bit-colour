import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [green, setGreen] = useState(8)

  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
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

export default App
