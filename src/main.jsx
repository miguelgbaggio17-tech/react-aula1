import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTarefas from './AppTarefas.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppTarefas />
  </StrictMode>,
)
