import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@srfoster/textbook-lib/styles'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
