import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import Slider from "react-slick";
import "./home.css"
// {* -------------Dashboard  import  compoents -------------*}

import {
    Grid,
} from "@material-ui/core";
// {* -------------Dashboard styles-------------*}

const useStyles = theme => ({
    root: {
        width: "100%",
        height: "100%"
    },
});
const homePage = {
    //------------- banner image ---------------
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
                img: "https://www.annammilk.com/uploads/banner2.jpg",
            },
            {
                img: "https://www.annammilk.com/uploads/banner3.jpg",
            },
            {
                img: "https://www.annammilk.com/uploads/banner4.jpg",
            },
            {
                img: "https://www.annammilk.com/uploads/banner5.jpg",
            },
        ]
    },
}
// InitialState
const initialState = {
    data: null,
}
// end
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        // fetch data function
    }
    render() {
        const { classes } = this.props;
        var settings = homePage.carousel.setting;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            {homePage.carousel.data.map((val, index) => (
                                <>
                                    <Grid container key={index} style={{ height: "500px" }}>
                                        <a style={{ width: "100%", height: "100%"}}>
                                            <img
                                                src={val.img}
                                                style={{ width: "100%",objectFit:"cover", height: "100%" }}
                                            />
                                        </a>
                                    </Grid>
                                </>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>

            </div >
        );
    }
}

export default withStyles(useStyles)(Dashboard);