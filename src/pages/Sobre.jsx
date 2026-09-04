import { useContext } from "react"
import { ThemeContext } from '../contexts/ThemeContext'

const Sobre = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <p>Sobre</p>
      <p>Aqui você fica sabendo tudo sobre a nossa aplicação.</p>
    </div>
  )
}

export default Sobre