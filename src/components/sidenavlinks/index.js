import React from "react";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';


const useStyles = theme => ({
    root: {
        top: "100px",
        position: "fixed",
        zIndex: 10
    }, list: {
        padding: 12,
        background: "#55efc4",
        borderTopRightRadius: 20,
        color: "#fff",
        width: 50,
        cursor: "pointer",
        "& span": {
            display: "none"
        },
        "&:hover": {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            width: 150,
            "& span": {
                margin: "auto",
                color: "#fff",
                display: "block"
            },
        },
    },
    list1: {
        padding: 12,
        background: "#badc58",
        color: "#fff",
        width: 50,
        cursor: "pointer",
        "& span": {
            display: "none"
        },
        "&:hover": {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            width: 150,
            "& span": {
                margin: "auto",
                color: "#fff",
                display: "block"
            },
        },
    },
    list2: {
        padding: 12,
        background: "#55efc4",
        color: "#fff",
        width: 50,
        cursor: "pointer",
        "& span": {
            display: "none"
        },
        "&:hover": {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            width: 150,
            "& span": {
                color: "#fff",
                margin: "auto",
                display: "block"
            },
        },
    },
    list3: {
        padding: 12,
        background: "#f0932b",
        borderBottomRightRadius: 20,
        color: "#fff",
        width: 50,
        cursor: "pointer",
        "& span": {
            display: "none"
        },
        "&:hover": {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            width: 150,
            "& span": {
                color: "#fff",
                display: "block",
                margin: "auto",
            },
        },
    }
});

class Sidenavlinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid justify="center" alignItems="center">
                    <div className={classes.list} onClick={() => this.props.history.push("/signin")}>
                        <div style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Bottle-Icon.png" /><span>Subscribe&nbsp;Milk</span></div>
                    </div>
                    <div className={classes.list1} onClick={() => this.props.history.push("/signin")}>
                        <div style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Bottle-Icon.png" /><span>Sample&nbsp;Milk</span></div>
                    </div>
                    <div className={classes.list2} onClick={() => this.props.history.push("/signin")}>
                        <div style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Shopping-Cart.png" /><span>Organic&nbsp;Cart</span></div>
                    </div>
                    <div className={classes.list3} >
                        <div style={{ display: "flex", alignItems: "center" }}><img alt="img" width="40px" src="assets/images/icons/Phone.png" /><span>Call&nbsp;Back</span></div>
                    </div>
                </Grid>
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Sidenavlinks));
