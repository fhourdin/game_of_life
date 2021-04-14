import React from 'react'
import { Box } from '@material-ui/core'
import Actions from '../Actions'
import World from '../World'
import useStyles from './styles'
import { PlayerContext, usePlayerInit } from '../../contexts/player'

const Game = () => {
  const classes = useStyles()
  const player = usePlayerInit()

  return (
    <PlayerContext.Provider value={player}>
      <Box className={classes.root}>
        <World />
        <Actions />
      </Box>
    </PlayerContext.Provider>
  )
}

export default Game
