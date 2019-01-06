import React from "react"
import { object } from "prop-types"
import { Typography, Button, TextField } from "@material-ui/core"
import { unstable_Box as Box } from "@material-ui/core/Box"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  root: {},
  emailInput: {
    maxWidth: 500
  }
})

const Form = ({ classes }) => (
  <Box
    id="emailForm"
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    className={classes.root}
    component="section"
    py={10}
    px={{ xs: 1, sm: 5, md: 30, lg: 40 }}
  >
    <Typography variant="h4">
      <Box pb={10}>{"Let's Keep in Touch"}</Box>
    </Typography>

    <TextField
      id="outlined-email-input"
      label="Email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="outlined"
      fullWidth
      className={classes.emailInput}
    />

    <Box pt={5}>
      <Button variant="outlined" color="secondary">
        Keep me Updated
      </Button>
    </Box>
  </Box>
)

Form.propTypes = {
  classes: object
}

export default withStyles(styles)(Form)
