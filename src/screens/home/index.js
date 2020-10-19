import React from "react";

// {*----------home page parent components imports-----------*}

import { Grid, Hidden } from "@material-ui/core";
import { Navbar, SideMenu } from "../../components";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import routes from './../../router/routes';
import Dashboard from "../../components/dashboard/index"
import Login from "../login/index"
// {*----------home page parent components style-----------*}

const useStyles = theme => ({
    desktopNavbar: { 
        width: "100%"
    }, 
    desktopSidebar: {
        width: 200 
    },
    desktopSidebarContainer: {
        width: "100%",
 
    },
    appDesktopContainer: {
        marginLeft: 200
    },
  
    componentContainer: {
        height: "calc(100vh - 70px)",
        width: "100%",
        // backgroundColor: theme.palette.primary.dark,
        overflow: "auto",
    }
});

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }
    // {*----------home page inside  child components-----------*}

    giveMeComponentToRender = (auth) => {
        if (this.props.match.path === routes.home) {
            return <Dashboard {...this.props} />;
        }else if (this.props.match.path === routes.login) {
            return <Login {...this.props} />;
        }
    };
    toogleDrawer = () => false;
    render() {

        const { classes } = this.props;

        return (
            <Grid container justify="center" alignItems="center">
                <Grid item className={classes.desktopNavbar}>

                    {/* // {*----------home page topnavbar component-----------*} */}
                    <Navbar
                        {...this.props}
                    />
                </Grid>
                <Grid item container className={classes.desktopSidebarContainer}>
                    <Grid item className={classes.componentContainer}>

                        {/* // {*----------home page  components-----------*} */}
                        {this.giveMeComponentToRender()}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
};

export default withRouter(withStyles(useStyles)(Home));
