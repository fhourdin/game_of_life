import { Box, IconButton } from '@material-ui/core'
import {
  FastForwardRounded,
  PauseRounded,
  PlayArrowRounded,
  ReplayRounded,
  ShuffleRounded,
} from '@material-ui/icons'
import React from 'react'
import { usePlayerContext } from '../../contexts/player'
import { useWorldContext } from '../../contexts/world'
import useStyles from './styles'

const Actions = () => {
  const classes = useStyles()
  const { randomize, init } = useWorldContext()
  const {
    playing,
    setPlaying,
    fastForward,
    setFastForward,
  } = usePlayerContext()

  const handlePlayClick = () => {
    setPlaying((prevPlaying) => !prevPlaying)
  }

  const handleFastForwardClick = () => {
    setFastForward((prevFf) => !prevFf)
  }

  const handleResetClick = () => {
    init()
    setPlaying(false)
  }

  const handleRandomizeClick = () => {
    randomize()
    setPlaying(false)
  }

  return (
    <Box className={classes.root}>
      <IconButton className={classes.btn} onClick={handlePlayClick}>
        {playing ? <PauseRounded /> : <PlayArrowRounded />}
      </IconButton>
      <IconButton className={classes.btn} onClick={handleFastForwardClick}>
        <FastForwardRounded color={fastForward ? 'secondary' : undefined} />
      </IconButton>
      <IconButton className={classes.btn} onClick={handleResetClick}>
        <ReplayRounded />
      </IconButton>
      <IconButton className={classes.btn} onClick={handleRandomizeClick}>
        <ShuffleRounded />
      </IconButton>
    </Box>
  )
}

export default Actions
