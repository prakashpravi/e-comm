import React from 'react';
// {* -------------topnavbar  import  compoents -------------*}
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
// {* -------------topnavbar  styles -------------*} 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 70,
    background: theme.palette.primary.dark,
  },
  topbar: {
    justifyContent: "center",
    height: 70, background: "#1e213a",
  }
}));

const Navbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* // {* -------------topnavbar  componts -------------*} */}
      <AppBar position="fixed"
        className={classes.topbardiv} style={{ boxShadow: "none" }}>
        <Toolbar
          className={classes.topbar}>
          Header
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Navbar);
