import './App.css'
import ThemeToggleButton from './components/ThemeToggleButton'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div>
        <nav>Menu de navegação</nav>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  )
}

export default App
