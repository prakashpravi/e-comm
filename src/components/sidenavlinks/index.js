import React from "react";

// {*----------home page parent components imports-----------*}

import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';

// {*----------home page parent components style-----------*}

const useStyles = theme => ({
    root: {
        top: "100px",
        position: "absolute",
        zIndex: 10
    }, list: {
        padding: 12,
        background: "#55efc4",
        borderTopRightRadius: 20,
        color: "#fff",
        width: 50,
        cursor: "pointer",

        "&:hover": {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            width: 150,
        },
        "&:hover .Sidenavlinks-l-14": {
            display: "block"
        },
    }, l: {
        display: "none",
        width: "100px",
        fontWeight: 600
    },
    list1: {
        padding: 12,
        background: "#badc58",
        color: "#fff",
        width: 50,
        cursor: "pointer",

        "&:hover": {
            width: 150,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
        "&:hover .Sidenavlinks-l1-16": {
            display: "block"
        },
    }, l1: {
        display: "none",
        fontWeight: 600
    },
    list2: {
        padding: 12,
        background: "#55efc4",
        color: "#fff",
        width: 50,
        cursor: "pointer",
        "&:hover .Sidenavlinks-l2-18": {
            display: "block"
        },
        "&:hover": {
            width: 150,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        }
    }, l2: {
        display: "none",
        fontWeight: 600
    },
    list3: {
        padding: 12,
        background: "#f0932b",
        borderBottomRightRadius: 20,
        color: "#fff",
        cursor: "pointer",
        width: 50,
        "&:hover .Sidenavlinks-l3-20": {
            display: "block"
        },
        "&:hover": {
            width: 150,
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        }
    }, l3: {
        display: "none",
        fontWeight: 600
    }
});

class Sidenavlinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }
    // {*----------home page inside  child components-----------*}

    render() {

        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid justify="center" alignItems="center">
                    <div className={classes.list} onClick={() => this.props.history.push("/signin")}>
                        <span style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Bottle-Icon.png" /><span className={classes.l}>Subscribe&nbsp;Milk</span></span>
                    </div>
                    <div className={classes.list1} onClick={() => this.props.history.push("/signin")}>
                        <span style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Bottle-Icon.png" /><span className={classes.l1}>Sample&nbsp;Milk</span></span>
                    </div>
                    <div className={classes.list2} onClick={() => this.props.history.push("/signin")}>
                        <span style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Shopping-Cart.png" /><span className={classes.l2}>Organic&nbsp;Cart</span></span>
                    </div>
                    <div className={classes.list3} >
                        <span style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Phone.png" /><span className={classes.l3}>Call&nbsp;Back</span></span>
                    </div>
                </Grid>
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Sidenavlinks));
