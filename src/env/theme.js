import { createMuiTheme } from '@material-ui/core'

const colors = { lightgreen: '#1abc9c', green: '#16a085', orange: '#f39c12' }

const theme = {
  palette: {
    primary: { main: colors.green },
    secondary: { main: colors.orange },
    common: {
      ...colors,
    },
  },
}

export default createMuiTheme(theme)
