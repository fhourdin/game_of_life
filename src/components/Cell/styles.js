import { makeStyles } from '@material-ui/core'
import { WORLD_SIZE } from '../../env/config'

const useStyles = makeStyles((theme) => ({
  root: ({ x, y, value }) => ({
    position: 'absolute',
    left: `${(x / WORLD_SIZE) * 100}%`,
    top: `${(y / WORLD_SIZE) * 100}%`,
    height: `calc(${theme.spacing(60) / WORLD_SIZE}px - 1px)`,
    width: `calc(${theme.spacing(60) / WORLD_SIZE}px - 1px)`,
    borderTop: `1px solid ${theme.palette.common.lightgreen}`,
    borderLeft: `1px solid ${theme.palette.common.lightgreen}`,
    backgroundColor: theme.palette.common[value ? 'orange' : 'unset'],
  }),
}))

export default useStyles
