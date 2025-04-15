import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState(null)
  const [error, setError] = useState(null)

  // Test API call using fetch
  useEffect(() => {
    // Replace the URL below with your test endpoint
    fetch('https://api.github.com')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.status)
        }
        return response.json()
      })
      .then(data => {
        setApiData(data)
      })
      .catch(err => {
        setError(err.message)
      })
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div style={{ marginTop: '2rem' }}>
        <h2>API Test:</h2>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {apiData ? (
          <pre style={{ textAlign: 'left', background: '#f4f4f4', padding: '1rem' }}>
            {JSON.stringify(apiData, null, 2)}
          </pre>
        ) : (
          <p>Loading API data...</p>
        )}
      </div>
    </>
  )
}

export default App
