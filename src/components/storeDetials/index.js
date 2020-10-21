import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from "react-router-dom";
import { Grid, Card, Typography, Container, Button } from "@material-ui/core";
import Slider from "react-slick";
import "./style.css";

const homePage = {
    "carousel": {
        "setting": {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            fade: false,
            arrows: true,
            arrowsImg: true,
            dotsClass: "slickdev",
            accessibility: true,
            centerMode: false,
            focusOnSelect: false,
            pauseOnHover: false,
            pauseOnDotsHover: false,
            pauseOnFocus: true,
            swipe: false
        },
        "data": [
            {
                img: "https://www.bigbasket.com/media/uploads/p/l/10000072_16-fresho-carrot-local.jpg",
            },
            {
                img: "https://www.bigbasket.com/media/uploads/p/l/10000137_18-fresho-mint-leaves.jpg",
            },
            {
                img: "https://www.bigbasket.com/media/uploads/p/l/10000148_28-fresho-onion.jpg",
            },
            {
                img: "https://www.bigbasket.com/media/uploads/p/l/10000103_16-fresho-cucumber.jpg",
            },
        ]
    },
};
const useStyles = theme => ({
    root: {
        width: "100%",
        height: "100%",
        margin: "50px 0px"
    },
    card: {
        boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
        borderRadius: 16,
        overflow: "hidden",
        width: "100%",
    },
    card1: {
        boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
        borderRadius: 16,
        width: "100%",
        padding: 20,
        margin: "10px 0px",
        [theme.breakpoints.down('xs')]: {
            width: "90%",
        }
    }, titles: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: "100%",
        fontSize: 16,
        color: "#000",
        letterSpacing: 2,
    }, btn: {
        background: "#006da8",
        padding: "12px 30px",
        fontSize: 14,
        letterSpacing: 2,
        borderRadius: 12,
        color: "#fff",
        "&:hover": {
            background: "#006da8",
        },
        [theme.breakpoints.down('xs')]: {
            margin: "auto",
            display: "flex",
        }
    }
});
class StoreDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }

    render() {
        const { classes } = this.props;
        var settings = homePage.carousel.setting;
        return (
            <div className={classes.root}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.card}>
                                <Slider ref={c => (this.slider = c)} {...settings}>
                                    {homePage.carousel.data.map((val, index) => (
                                        <>
                                            <Grid container key={index} style={{ height: "600px" }}>
                                                <span style={{ width: "100%", height: "100%" }}>
                                                    <img
                                                        alt="img"
                                                        src={val.img}
                                                        style={{ width: "100%", objectFit: "cover", height: "100%" }}
                                                    />
                                                </span>

                                            </Grid>
                                        </>
                                    ))}
                                </Slider>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card className={classes.card1}>
                                <Typography variant="body1"
                                    component="span" className={`${classes.titles}`}>
                                    <span style={{ fontWeight: "bold" }}>Title</span>
                                    <br />{"Onion - Medium/Vengayam"}
                                </Typography>
                                <br /><br />
                                <Typography variant="body1"
                                    component="span" className={`${classes.titles}`}>
                                    <span style={{ fontWeight: "bold" }}>Description</span>
                                    <br />
                                    {"Onion - Medium/Vengayam"}
                                </Typography>
                            </Card>

                            <Card className={classes.card1}>
                                <Typography variant="body1"
                                    component="span" className={`${classes.titles}`}>
                                    <span style={{ fontWeight: "bold" }}>Quantity</span>
                                </Typography>
                            </Card>

                            <Card className={classes.card1}>
                                <Button variant="contained" className={classes.btn} onClick={() => this.props.history.push("/cart")}>Buy Now</Button>
                            </Card>

                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
};
export default withRouter(withStyles(useStyles)(StoreDetails));