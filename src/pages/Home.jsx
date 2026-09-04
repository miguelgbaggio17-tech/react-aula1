import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>
      <h2>Página Inicial</h2>
      <b>Bem vindos à página inicial dessa aplicação gloriosa</b>
    </div>
  )
}

export default Home;