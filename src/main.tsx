import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'
// импорт глобальных стилий
import { GlobolStyles } from './styles/GlobolStyles.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobolStyles/>
    <App />

  </StrictMode>,
)
