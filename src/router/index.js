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
            </Switch>
        </Router>
    )
}

export default RouterApp;
