import React from 'react';

// {*----------home page Login components imports-----------*}

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, FormControlLabel, Checkbox, TextField, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from "react-router-dom";

// {*----------home page Login style-----------*}

const useStyles = theme => ({
    root: {
        background: '#fff',
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(63, 40, 3, 0.7)",
        color: " #555555",
        borderRadius: 12,
        margin: "auto",
        padding: 20,
        margin: 20,
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
        cursor: "pointer"
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
        }
    },
    title: {
        width: "100%",
        textAlign: "center",
        borderBottom: "4px solid #fff",
        fontSize: "2rem"
    }
});

class Login extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.root}>
                <div className={classes.paper}>
                    <h3 className={classes.title}>Login</h3>
                    <Grid container component="main" >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography className={classes.discription} variant="body1">{"You can Login if you are a Subscriber to Annam Native Cow Milk."}</Typography>

                            <TextField size="small" label="Mobile Number" variant="outlined" type="text" className={classes.input} />
                            <TextField size="small" label="Password" variant="outlined" className={classes.input} />

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        // checked={state.checkedB}
                                        // onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="Primary"
                            />
                            <Typography className={classes.reset} variant="body1">{"If you forgot your password you can"}<b style={{ color: "#000" }}> reset it.</b></Typography>

                            <Grid
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                            >
                                <Grid><div className={classes.letter}>New user?<b> Sign Up</b></div></Grid>
                                <Grid> <Button
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
                    </Grid>
                </div>
            </Grid>
        );
    }
};

export default withRouter(withStyles(useStyles)(Login));