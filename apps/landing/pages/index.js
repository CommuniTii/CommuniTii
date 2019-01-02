import React from "react"
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Typography, Button, IconButton, Icon, Avatar, Grid, Paper, AppBar, withStyles, TextField, Toolbar} from "@material-ui/core"
const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  icon: {
    
  },
  button: {
    position : "absolute",
    width: 167,
    height: 52,
    top: "715.11px",
    left : "857px",
    
    /* Secondary */
    background: "#F44336",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 5
  },
  signupemail: {

    position: "absolute",
    width: "435px",
    height: "67.37px",
    left: "406px",
    top: "700.85px",
    
    
  },
  paper : {
    position: "absolute",
    width: "100%",
    height: "563px",
    left: "1px",
    top: "123px",
    background: "#03A9F4"
  },
  tagline : {
    position: "absolute",
    width: 284,
    height: 32,
    left: "calc(50% - 284px/2 + 30px)",
    top: "calc(50% - 32px/2 - 310px)",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "normal",
    fontSize: 18,

    color: "#FF5252"
  }

  
});
const signup = () =>
{
  //mailchimp REST logic goes here
  alert("Hello")
}
const SimpleAppBar = (props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.spacing}>
          <Avatar src="static/logo.png"></Avatar>
          <Typography variant="h6" color="inherit">
             CommuniTii
          </Typography>
          
          <Icon className={"fab fa-linkedin"} />

         
        </Toolbar>
      </AppBar>
      <Grid container className={classes.root} spacing={16}>
      <Paper className = {classes.paper}>
      <Typography className={classes.tagline}>The game of life is better together</Typography>
      </Paper></Grid>
      <TextField
          id="filled-email-input"
          label="Email"
          className={classes.signupemail}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />
      
      <Button variant="contained" type="submit" color="primary" onClick= {signup}className={classes.button}>
        Sign Me Up
      </Button>
      
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

//export default LandingPage
