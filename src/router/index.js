import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import routes from "./routes"; //all routes

//Screens
import {
    Home,
} from "./../screens";

//Not Found Screen
// import NotFround from "./../components/common/NotFound/NotFound"; 
export const RouterApp = (props) => {

    return (
        <Router>
            <Switch>
                <Redirect exact path="/" to={routes.login} />
                <Route exact component={Home} path={routes.signup} />
                <Route exact component={Home} path={routes.login} />
                <Route exact component={Home} path={routes.home} />
                <Route exact component={Home} path={routes.about} />
                <Route exact component={Home} path={routes.store} />
                <Route exact component={Home} path={routes.StoreDetails} />
                <Route exact component={Home} path={routes.Contact} />
                <Route exact component={Home} path={routes.Cart} />
                <Route exact component={Home} path={routes.Dashboard} />
                <Route exact component={Home} path={routes.checkout} />
                <Route exact component={Home} path={routes.admin} />
            </Switch>
        </Router>
    )
}

export default RouterApp;
