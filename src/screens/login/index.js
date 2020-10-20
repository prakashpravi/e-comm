import React from 'react';

// {*----------home page Login components imports-----------*}

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, Dialog, TextField, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from "react-router-dom";

// {*----------home page Login style-----------*}

const useStyles = theme => ({
    root: {
        background: '#fff',
        alignItems: "center",
        // display: "flex",
        width: "100%",
        padding:"50px 0px",
        justifyContent: "center"
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(63, 40, 3, 0.7)",
        color: " #555555",
        borderRadius: 12,
        padding: 20,
        width: "400px",
        margin: "auto",
        [theme.breakpoints.down('xs')]: {
            width: "80%",
        },
    },
    discription: {
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "bold",
    },
    reset: {
        color: "#999",
        fontSize: "1rem",
        textAlign: "center",
        fontWeight: "bold",
        cursor: "pointer",
        marginBottom: 20
    },
    input: {
        width: "100%",
        marginTop: "20px",
        color: "#000"
    },
    letter: {
        color: "#80B500",
        cursor: "pointer",
        marginTop: 7,
    }, resetspass: {
        borderRadius: 8,
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        background: "#3E4958",
        marginTop: 20
    },
    submit: {
        borderRadius: 8,
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
        background: "#80B500",
        textTransform: "capitalize",
        fontWeight: 600,
        fontSize: 16,
        "&:hover": {
            borderRadius: 8,
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            background: "#80B500",
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: 16,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 20,
        },
    },
    title: {
        width: "100%",
        textAlign: "center",
        borderBottom: "4px solid #fff",
        fontSize: "2rem"
    }, text: {
        textAlign: "center",
        fontSize: 40,
        margin: "30px",
        [theme.breakpoints.down('xs')]: {
            fontSize: 30,
        },
    }, alert: {
        textAlign: "center",
        padding: 12,
        marginBottom: 20,
        "& h3": {
            color: "#000",
            fontSize: 17,
            marginTop: 30
        }
    }, brdr: {
        "& .MuiDialog-paperWidthSm": {
            borderRadius: 20
        }
    }
});
// InitialState
const initialState = {
    open: false,
}
// end
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleClose = () => {
        this.setState({
            ...this.state,
            open: !this.state.open
        })
    };
    render() {
        const { classes } = this.props;
        const { open } = this.state;
        return (
            <Grid className={classes.root}>
                <Dialog onClose={() => this.handleClose()} open={open} className={classes.brdr}>
                    <div className={classes.alert}>
                        <img alt="img" src="assets/images/bg_2.png" width="70px" style={{ marginBottom: -23 }} />
                        <br /><h3>Please enter your mobile number to reset password</h3>
                        <TextField size="small" label="Mobile Number" variant="outlined" type="text" className={classes.input} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.resetspass}
                            onClick={() => this.handleClose()}
                        >Verify Mobile Number
                                </Button>
                    </div>
                </Dialog>
                <h3 className={classes.text}>Please Login to Continue</h3> <br />
                <div className={classes.paper}>
                    <h3 className={classes.title}>
                        <img alt="img" src="assets/images/bg_2.png" width="70px" style={{ marginBottom: -23 }} />
                        Login</h3>
                    <Grid container component="main" >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography className={classes.discription} variant="body1">{"You can Login if you are a Subscriber to 02 Native Cow Milk."}</Typography>

                            <TextField size="small" label="Mobile Number" variant="outlined" type="text" className={classes.input} />
                            <TextField size="small" label="Password" variant="outlined" className={classes.input} />

                            {/* <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            /> */}
                            {/* <Typography className={classes.reset} variant="body1">{"Forgot password?"}<b style={{ color: "#000" }}> reset it.</b></Typography> */}
                            <br /> <br />
                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid><div className={classes.letter}>Forgot password?<b onClick={() => this.handleClose()}> Reset Password</b></div></Grid>
                                <Grid><div className={classes.letter}>New to O2 Native Cow Milk?<b onClick={() => this.props.history.push("/signin")}> Sign Up</b></div></Grid>
                                <Grid style={{ margin: "auto" }}> <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => this.props.history.push("/home")}
                                >Login <NavigateNextIcon />
                                </Button> </Grid>
                            </Grid>
                        </Grid>
                    </Grid><br />
                </div>
            </Grid>
        );
    }
};

export default withRouter(withStyles(useStyles)(Login));