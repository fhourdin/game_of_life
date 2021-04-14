import { Box } from '@material-ui/core'
import React from 'react'
import { useWorldContext } from '../../contexts/world'
import useStyles from './styles'

const Cell = ({ x, y, value }) => {
  const { setCell } = useWorldContext()
  const classes = useStyles({ x, y, value })

  const handleClick = () => {
    setCell(x, y, !value)
  }

  return <Box onClick={handleClick} className={classes.root} />
}

export default Cell
