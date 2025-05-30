
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as BrowserRoutes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRoutes>
    <App />
  </BrowserRoutes>,
)
