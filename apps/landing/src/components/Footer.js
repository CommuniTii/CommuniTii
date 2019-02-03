import React from "react"
import { object } from "prop-types"
import Typography from "@material-ui/core/Typography"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    color: theme.palette.primary.contrastText
  }
})

const Footer = ({ classes: { root, text } }) => (
  <Box
    component="footer"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    py={2}
    className={root}
  >
    <Typography className={text}>
      Made @ CommuniTii © 2019 Asterix Labs
    </Typography>
  </Box>
)

Footer.propTypes = {
  classes: object
}

export default withStyles(styles)(Footer)
