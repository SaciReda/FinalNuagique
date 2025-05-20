import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Bail from './body/Code.js'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Bail />
  </StrictMode>,
)
