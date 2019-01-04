import React from "react"
import { Typography } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"

const backgroundImage =
  "https://images.unsplash.com/photo-1520492943297-59dc5f2d0fe6?auto=format&fit=crop&w=1400&q=80"

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300
    },
    [theme.breakpoints.down("sm")]: {
      height: "60vh"
    }
  },
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
})

const Hero = ({ classes }) => (
  <Box className={classes.background}>
    <img style={{ display: "none" }} src={backgroundImage} alt="" />

    <Box
      component="section"
      className={classes.root}
      display="flex"
      alignItems="center"
    >
      <Typography variant="h3">Hello</Typography>
    </Box>
  </Box>
)

export default withStyles(styles)(Hero)
