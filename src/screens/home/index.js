import React from "react";

// {*----------home page parent components imports-----------*}

import { Grid } from "@material-ui/core";
import { Navbar } from "../../components";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import routes from './../../router/routes';
import HomePage from "../../components/home/index"
import Login from "../login/index";
import Signup from "../signup/index";
import About from "../../components/about/index";
import Sidenavlinks from "../../components/sidenavlinks/index";
import Footer from "../../components/footer/index";
import Store from "../../components/store/index";
import StoreDetails from "../../components/storeDetials/index";
import Contact from "../../components/contact/index";
import Cart from "../../components/cart/index";
import Dashboard from "../../components/dashboard/index";
import Checkout from "../../components/checkout/index";

// {*----------home page parent components style-----------*}

const useStyles = theme => ({
    desktopNavbar: {
        width: "100%"
    },
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
            return <HomePage {...this.props} />;
        } else if (this.props.match.path === routes.login) {
            return <Login {...this.props} />;
        } else if (this.props.match.path === routes.signup) {
            return <Signup {...this.props} />;
        } else if (this.props.match.path === routes.about) {
            return <About {...this.props} />;
        } else if (this.props.match.path === routes.store) {
            return <Store {...this.props} />;
        } else if (this.props.match.path === routes.StoreDetails) {
            return <StoreDetails {...this.props} />;
        } else if (this.props.match.path === routes.Contact) {
            return <Contact {...this.props} />;
        } else if (this.props.match.path === routes.Cart) {
            return <Cart {...this.props} />;
        } else if (this.props.match.path === routes.Dashboard) {
            return <Dashboard {...this.props} />;
        } else if (this.props.match.path === routes.checkout) {
            return <Checkout {...this.props} />;
        }
    };
    render() {
        const { classes } = this.props;
        return (
            <Grid container justify="center" alignItems="center">
                <Grid item container className={classes.desktopNavbar}>
                    {/* // {*----------home page topnavbar component-----------*} */}
                    <Navbar
                        {...this.props}
                    />
                    <Sidenavlinks {...this.props} />
                </Grid>
                <Grid item container className={classes.desktopNavbar}>

                    {/* // {*----------home page components-----------*} */}
                    {this.giveMeComponentToRender()}

                </Grid>
                <Grid item container className={classes.desktopNavbar}>
                    {/* // {*----------home page footer components-----------*} */}
                    <Footer
                    />
                </Grid>
            </Grid>
        );
    }
};

export default withRouter(withStyles(useStyles)(Home));