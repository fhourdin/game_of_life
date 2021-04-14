import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: theme.spacing(4),
  },
  root: {
    position: 'relative',
    height: theme.spacing(40),
    width: theme.spacing(40),
    borderBottom: `1px solid ${theme.palette.common.lightgreen}`,
    borderRight: `1px solid ${theme.palette.common.lightgreen}`,
  },
}))

export default useStyles
