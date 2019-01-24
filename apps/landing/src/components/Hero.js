import React from "react"
import { object } from "prop-types"
import { Typography, Button } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"
import AnchorLink from "react-anchor-link-smooth-scroll"
import heroBgImg from "../images/heroBgImg.png"

// const backgroundImage =
//   "https://images.unsplash.com/photo-1520492943297-59dc5f2d0fe6?auto=format&fit=crop&w=1400&q=80"

const styles = theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300
    },
    [theme.breakpoints.down("xs")]: {
      height: "90vh"
    }
  },
  background: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBgImg})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
})

const Hero = ({ classes }) => (
  <Box className={classes.background} component="section">
    <img style={{ display: "none" }} src={heroBgImg} alt="" />

    <Box
      className={classes.root}
      display="flex"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Typography
        color="inherit"
        align="center"
        marked="center"
        component="div"
      >
        <Box
          fontSize={{ xs: 35, md: 45, lg: 55 }}
          mx={{ xs: 1, sm: 15, md: 20, lg: 30 }}
          fontWeight={700}
        >
          The game of life.
        </Box>

        <Box
          fontSize={{ xs: 18, md: 22, lg: 25 }}
          mx={{ xs: 1, sm: 15, md: 20, lg: 30 }}
          my={{ xs: 5, sm: 8, md: 10 }}
          fontWeight={500}
        >
          CommuniTii is a gamified social platform that enhances and encourages
          IRL (in real life) experiences through organic communities and fun
          interactive activities called quests.
        </Box>
      </Typography>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        component={AnchorLink}
        href="#emailForm"
      >
        Stay in Touch!
      </Button>
    </Box>
  </Box>
)

Hero.propTypes = {
  classes: object.isRequired
}

export default withStyles(styles)(Hero)
