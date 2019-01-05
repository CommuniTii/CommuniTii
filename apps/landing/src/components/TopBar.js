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
    {
      className: "fab fa-twitter-square",
      link: "https://twitter.com/Communitiia"
    },
    {
      className: "fab fa-linkedin",
      link: "https://www.linkedin.com/company/communitii/"
    },
    {
      className: "fab fa-instagram",
      link: "https://www.instagram.com/communitiiapp/"
    }
  ].map(({ className, link }, i) => (
    <IconButton
      href={link}
      component="a"
      target="__blank"
      key={i}
      color="inherit"
    >
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
