import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'react-app-polyfill/stable';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <p>Hello World</p>
    <App />
  </StrictMode>,
)
