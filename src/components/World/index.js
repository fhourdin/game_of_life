import { Box, Typography } from '@material-ui/core'
import { map } from 'lodash'
import React from 'react'
import { useWorldContext } from '../../contexts/world'
import Cell from '../Cell'
import useStyles from './styles'

const World = () => {
  const classes = useStyles()
  const { world } = useWorldContext()

  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="secondary">
        Game Of Life
      </Typography>
      <Box className={classes.root}>
        {map(world, (value, key) => {
          const [x, y] = key.split('-')
          return (
            <Cell
              key={key}
              value={value}
              x={parseInt(x, 10)}
              y={parseInt(y, 10)}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default World
