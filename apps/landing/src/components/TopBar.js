import React from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  Toolbar,
  Typography,
  Icon,
  IconButton
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { unstable_Box as Box } from "@material-ui/core/Box"

import logoImg from "../images/logo.png"

const styles = {
  grow: {
    flexGrow: 1
  },
  logo: {
    objectFit: "cover",
    width: "30px",
    height: "30px"
  }
}

const SocialBtns = () =>
  [
    { className: "fab fa-twitter-square", link: "" },
    { className: "fab fa-facebook", link: "" },
    { className: "fab fa-linkedin", link: "" }
  ].map(({ className }, i) => (
    <IconButton key={i} color="inherit">
      <Icon className={className} />
    </IconButton>
  ))

const TopBar = ({ classes }) => (
  <AppBar
    position="static"
    color="default"
    className={classes.grow}
    component="header"
  >
    <Toolbar>
      <Box display="flex" className={classes.grow}>
        <img src={logoImg} alt="CommuniTii logo" className={classes.logo} />
        <Typography variant="h6" color="inherit">
          CommuniTii
        </Typography>
      </Box>

      <SocialBtns />
    </Toolbar>
  </AppBar>
)

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
