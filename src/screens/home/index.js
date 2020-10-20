import React from "react";

// {*----------home page parent components imports-----------*}

import { Grid } from "@material-ui/core";
import { Navbar } from "../../components";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import routes from './../../router/routes';
import Dashboard from "../../components/dashboard/index"
import Login from "../login/index";
import Signup from "../signup/index";
import About from "../../components/about/index";

// {*----------home page parent components style-----------*}

const useStyles = theme => ({
    desktopNavbar: {
        width: "100%"
    },
    componentContainer: {
        height: "calc(100vh - 70px)",
        width: "100%",
        overflow: "auto",
        margin:0,
        padding:0
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
        } else if (this.props.match.path === routes.login) {
            return <Login {...this.props} />;
        } else if (this.props.match.path === routes.signup) {
            return <Signup {...this.props} />;
        } else if (this.props.match.path === routes.about) {
            return <About {...this.props} />;
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
                <Grid item container>
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
