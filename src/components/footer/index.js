import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';


const useStyles = theme => ({
    root: {
        background: "#000000",
        fontSize: 14,
        padding: "5em 0",
        color: "rgba(255, 255, 255, 0.8)",
        width: "100%"
    }, titles: {
        marginBottom: 20,
        fontSize: 13,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: 3,
        color: "#fff",
    }, dis: {
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.8)",
        lineHeight: 2
    }, top: {
        marginTop: 29,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
        },
    }, copyright: {
        paddingTop: "5rem",
        textAlign: "center"
    }
});

class Footer extends React.Component {
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
               
                <Container>
                    <Grid container spacing={2}
                        direction="row"
                        justify="space-between"
                        alignItems="center">
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.titles}>O2 NATIVE COW MILK</Typography>
                            <Typography className={classes.dis}>Our primary goal is to nurture the society and its offsprings with our best efforts, a dedicated village and a farmer's society working diligently to nourish the indigenous cow breeds.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={1}>
                            <Typography className={`${classes.top} ${classes.titles}`}>MENU</Typography>
                            <Typography className={classes.dis}>Home</Typography>
                            <Typography className={classes.dis}>About Us</Typography>
                            <Typography className={classes.dis}>Contact Us</Typography>
                            <Typography className={classes.dis}>Store</Typography>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <Typography className={classes.titles}>HELP</Typography>
                            <Typography className={classes.dis}>Returns & Exchange</Typography>
                            <Typography className={classes.dis}>Terms & Conditions</Typography>
                            <Typography className={classes.dis}>Privacy Policy</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.titles}>HAVE QUESTIONS?</Typography>
                            <Typography className={classes.dis}> <i class="fa fa-map-marker" style={{ margin: 4 }}></i> O2 Native Cow Milk & Organic Foods, Chennai.</Typography>
                            <Typography className={classes.dis}><i class="fa fa-phone" style={{ margin: 4 }}></i>+91 7397358222</Typography>
                            <Typography className={classes.dis}><i class="fa fa-envelope" style={{ margin: 4 }}></i>support@o2nativecowmilk.com</Typography>
                        </Grid>

                    </Grid>
                    <Typography className={classes.copyright}>Copyright ©2020 All rights reserved | Developed by <a style={{ color: "#0481FF", cursor: "pointer" }} rel="noopener noreferrer" target="_blank" href="https://leadup.in/">LeadUp Technologies</a></Typography>
                </Container>
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Footer));