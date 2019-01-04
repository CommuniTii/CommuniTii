import React from "react"
import { object } from "prop-types"
import { Typography, Button } from "@material-ui/core"
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
  },
  h5: {
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 4,
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing.unit * 10
    }
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
      flexDirection="column"
      justifyContent="center"
    >
      <Typography color="inherit" align="center" variant="h2" marked="center">
        The Game of Life is better Together!
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        A gamified social platform that enhances and encourages IRL (in real
        life) experiences through organic communities and fun interactive
        activities called quests.
      </Typography>

      <Button color="secondary" variant="contained" size="large">
        Stay in Touch!
      </Button>
    </Box>
  </Box>
)

Hero.propTypes = {
  classes: object.isRequired
}

export default withStyles(styles)(Hero)
