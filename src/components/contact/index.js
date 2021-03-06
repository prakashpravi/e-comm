import React from "react";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';

const useStyles = theme => ({
    root: {
        width: "100%"
    }
});

class Contact extends React.Component {
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
                Contact
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Contact));