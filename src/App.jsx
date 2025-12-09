import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to React + Vite!</h1>

      <p>This is a working demo.</p>

      <button 
        onClick={() => setCount(count + 1)} 
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer'
        }}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
