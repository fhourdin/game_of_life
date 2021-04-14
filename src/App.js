import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Game from './components/Game'
import { useWorldInit, WorldContext } from './contexts/world'
import theme from './env/theme'

const App = () => {
  const world = useWorldInit()

  return (
    <ThemeProvider theme={theme}>
      <WorldContext.Provider value={world}>
        <Game />
      </WorldContext.Provider>
    </ThemeProvider>
  )
}

export default App
