import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Usuarios from './pages/Usuarios'
import AppTarefas from './pages/Tarefas/AppTarefas'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div id='divNav'>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tarefas">Tarefas</Link></li>
              <li><Link to="/usuarios">Usuários</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
            </ul>
          </nav>
          <ThemeToggleButton />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/tarefas' element={<AppTarefas />}/>
            <Route path='/usuarios' element={<Usuarios />}/>
            <Route path='/sobre' element={<Sobre />}/>
          </Routes>
        </div>

      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
