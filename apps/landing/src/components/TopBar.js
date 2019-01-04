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

const styles = {
  grow: {
    flexGrow: 1
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
  <AppBar position="static" color="primary" className={classes.grow}>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        CommuniTii
      </Typography>

      <SocialBtns />
    </Toolbar>
  </AppBar>
)

TopBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(TopBar)
