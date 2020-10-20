import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
    }, avatar: {
        height: "50px",
        width: "50px",

        marginTop: -90,
        position: "absolute",
        background: "#fff",
        borderRadius: "50%",
        color: "#000",
        textAlign: "center",
        alignItems: "center",
        marginLeft: "46%",
        cursor: "pointer"

    }
});

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }
    scroll = () => {
        window.scrollTo(0, 0)
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.avatar} onClick={() => this.scroll()}>
                    <ExpandLessIcon style={{ marginTop: 4 }} />
                </div>
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