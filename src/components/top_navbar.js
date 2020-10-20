import React from 'react';
// {* -------------topnavbar  import  compoents -------------*}
import { AppBar, Toolbar, IconButton, Typography, Button, Hidden, Drawer, ListItem, List, ListItemText, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// {* -------------topnavbar  styles -------------*} 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "70px",
    height: "70px",
    "& header": {
      minHeight: "70px",
      height: "70px",
      "& .MuiToolbar-regular": {
        height: "70px",
        minHeight: "70px",
      }
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
    },
  }, li: {
    fontSize: 12,
    padding: "8px 26px",
    fontWeight: "bold"
  }, drawer: {
    marginTop: 20,
    width: 250,
    background: "#369add",
  }, main: {
    "& .MuiDrawer-paper": {
      background: "#369add",
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
    }
  }, text: {
    color: "#fff",
    padding: "8px 20px",
    "& .MuiTypography-body1": {
      fontSize: 14,
      textTransform: "uppercase",
      letterSpacing: 2,
    }
  }, close: {
    right: 23,
    position: "absolute"
  }
}));

const Navbar = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });
  const toggleDrawer = () => {
    setState({
      ...state.open,
      open: !state.open
    })
  }
  const data = [
    {
      name: "home",
      path: "/home"
    },
    {
      name: "about us",
      path: "/about"
    },
    {
      name: "contact us",
      path: "/"
    },
    {
      name: "Login",
      path: "/login"
    },
    {
      name: "cart",
      path: "/"
    },
  ]
  return (
    <div className={classes.root}>
      {/* // {* -------------topnavbar  componts -------------*} */}
      <AppBar position="fixed" style={{ background: "#3E4958" }}>
        <Container>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Hidden mdUp>
                <MenuIcon onClick={() => toggleDrawer()} />
              </Hidden>
            </IconButton>
            <img alt="img" src="assets/images/bg_2.png" width="50px" style={{ marginTop: -5 }} />
            <Typography variant="h6" className={classes.title}>
              &nbsp;O2 Native Cow Milk</Typography>
            <Hidden smDown>
              <Button color="inherit" className={classes.li} onClick={() => props.history.push("/home")}>home</Button>
              <Button color="inherit" className={classes.li} onClick={() => props.history.push("/about")}>about us</Button>
              <Button color="inherit" className={classes.li}>contact us</Button>
              <Button color="inherit" className={classes.li} onClick={() => props.history.push("/login")}>Login</Button>
              <Button color="inherit" className={classes.li}><ShoppingCartIcon /> cart</Button>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor={"left"} open={state.open} onClose={() => toggleDrawer()} className={classes.main}>
        <div className={classes.drawer}>
          <HighlightOffIcon className={classes.close} onClick={() => toggleDrawer()} />
          <List>
            {data.map((text) => (
              <ListItem button key={text.name} className={classes.text} onClick={() => {
                props.history.push(text.path)
                toggleDrawer()
              }}>
                <ListItemText primary={text.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default withRouter(Navbar);