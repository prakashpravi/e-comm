import React from "react";
import { withStyles, Typography, CardActionArea, CardMedia, Card, CardContent, CardActions, Button, Container } from '@material-ui/core';
import Slider from "react-slick";
import "./home.css";
// {* -------------Dashboard  import  compoents -------------*}
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {
    Grid,
} from "@material-ui/core";
// {* -------------Dashboard styles-------------*}
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
            { img: "assets/images/home_slider/DSC_0446.JPG" },
            {
                img: "assets/images/home_slider/DSC_0605-min.JPG",
            },
            {
                img: "assets/images/home_slider/5-min.JPG",
            },
            {
                img: "assets/images/home_slider/DSC_0434-min.JPG",
            },
        ]
    },
    "cards": {
        "data": [
            {
                name: "Clean Glass Bottles",
                dis: "100% sanitized, UV cleaned bottles used for packaging and delivery.",
                img: "https://static.wixstatic.com/media/2e92df_4195a2bd0cf54531a2a96f0a01eb10e6~mv2.png/v1/fill/w_526,h_644,al_c,usm_0.66_1.00_0.01/2e92df_4195a2bd0cf54531a2a96f0a01eb10e6~mv2.png"
            },
            {
                name: "Centuries of Experience",
                dis: "We feel proud and privileged to bring back the agricultural practices followed by our ancestors that date back to several centuries",
                img: "https://static.wixstatic.com/media/2e92df_a9d267d9809647a693d46aee31de324e~mv2.jpg/v1/fill/w_524,h_644,al_c,q_80,usm_0.66_1.00_0.01/2e92df_a9d267d9809647a693d46aee31de324e~mv2.jpg"
            },
            {
                name: "100% Organic",
                dis: "Products we feature in this website is 100% organic and certified by the Food Safety and Standards Authority of India",
                img: "https://static.wixstatic.com/media/2e92df_29965ff180ce443695e6978ba520a961~mv2.jpg/v1/fill/w_524,h_644,al_c,q_80,usm_0.66_1.00_0.01/2e92df_29965ff180ce443695e6978ba520a961~mv2.jpg"
            }
        ]
    },
    "list": {
        "all": [
            "Adambakkam",
            "Adayar",
            "Alandur",
            "Alwarpet",
            "Ambattur",
            "Anna Nagar",
            "Arumbakkam",
            "Ashok Nagar",
            "Avadi",
            "Azhvaar Tirunagar",
            "Besant Nagar",
            "Camp Road",
            "Chetpet",
            "Choolaimedu",
            "Chromepet",
            "Gopalapuram",
            "Gowriwalkam",
            "Iyyappanthangal",
            "K.K Nagar",
            'Kattupakkam',
            "Keezhkattalai",
            "Kilpauk",
            "Kodambakkam",
            "Koyambedu",
            "Kundrathur",
            "Madipakkam",
            "Manapakkam",
            'Mandaveli',
            "Medavakkam",
            "Meenambakkam",
            "Moulivakkam",
            "MRC Nagar",
            "Mugalivakkam",
            "Mugappair",
            "Mylapore",
            "Nanganallau",
            "Nanmagalam",
            "Nolambur",
            "Padi",
            "Pallavaram",
            "Pallikaranai",
            "Perambur",
            "Perungudi",
            "Poonamallee",
            "Porur",
            "Purasavakkam",
            "RA Puram",
            "Ramapuram",
            "Royapettah",
            "Saaligramam",
            'Saidapet',
            "Sanotorium",
            "Santhome",
            "Selaiyur",
            "Sholinganallur",
            "T.Nagar",
            "Tambaram",
            "Thirumangalam",
            "Thiruvanmiyur",
            "Vadapalani",
            'Valasaravakkam',
            'Vanagaram',
            "Velachery",
            "Vengai",
            "Villivakkam",
            "Virugambakkam",
            "West Mambalam"
        ],
        "list1": [
            "Adambakkam",
            "Adayar",
            "Alandur",
            "Alwarpet",
            "Ambattur",
            "Anna Nagar",
            "Arumbakkam",
            "Ashok Nagar",
            "Avadi",
            "Azhvaar Tirunagar",
            "Besant Nagar",
            "Camp Road",
            "Chetpet",
            "Choolaimedu",
            "Chromepet",
            "Gopalapuram",
            "Gowriwalkam",
            "Iyyappanthangal",
            "K.K Nagar",
            'Kattupakkam',
            "Keezhkattalai",
            "Kilpauk",
            "Kodambakkam",
            "Koyambedu",
            "Kundrathur",
            "Madipakkam",
            "Manapakkam",
            'Mandaveli',
            "Medavakkam",
            "Meenambakkam",
            "Moulivakkam",
            "MRC Nagar",
            "Mugalivakkam"
        ],
        "list2": [
            "Mugappair",
            "Mylapore",
            "Nanganallau",
            "Nanmagalam",
            "Nolambur",
            "Padi",
            "Pallavaram",
            "Pallikaranai",
            "Perambur",
            "Perungudi",
            "Poonamallee",
            "Porur",
            "Purasavakkam",
            "RA Puram",
            "Ramapuram",
            "Royapettah",
            "Saaligramam",
            'Saidapet',
            "Sanotorium",
            "Santhome",
            "Selaiyur",
            "Sholinganallur",
            "T.Nagar",
            "Tambaram",
            "Thirumangalam",
            "Thiruvanmiyur",
            "Vadapalani",
            'Valasaravakkam',
            'Vanagaram',
            "Velachery",
            "Vengai",
            "Villivakkam",
            "Virugambakkam",
            "West Mambalam"
        ]
    },
    "Subscription": [
        {
            name: "Daily plan :",
            dis: "Delivery opted for all 30 days of your subscription."
        },
        {
            name: "Weekdays :",
            dis: "Milk will be delivered to you only during weekdays (i.e.) except Saturdays and Sundays."
        },
        {
            name: "AboutFiftyAlternative days :",
            dis: "Milk will be delivered to you on Alternative days starting from the date of your choice!."
        },
        {
            name: "Tuesdays, Thursdays, and Saturdays :",
            dis: "You will get your milk only on these days, (Note: Starting date of delivery will be chosen based on the nearest day of choice (i.e,) nearest Tuesday, Thursday, or Saturday of subscription payment."
        }
    ]
}
const useStyles = theme => ({
    root: {
        width: "100%",
        height: "100%"
    },
    content: {
        textAlign: "center",
        width: "100%",
        marginTop: "-400px",
        zIndex: 1,
    }, t: {
        textAlign: "center",
        lineHeight: "1.1em",
        fontSize: 90,
        color: "#fff",
        textShadow: "rgba(0, 0, 0, 0.498039) -1px -1px 0px, rgba(0, 0, 0, 0.498039) -1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px 1px 0px, rgba(0, 0, 0, 0.498039) 1px -1px 0px",
        [theme.breakpoints.down('sm')]: {
            fontSize: 50,
        }
    },
    d: {
        marginTop: 8,
        textAlign: "center",
        lineHeight: "1.1em",
        fontSize: 18,
        color: "#fff"
    },
    btn: {
        marginTop: 20,
        color: "#fff",
        background: " #32e4cc",
        padding: "18px 20px",
        textShadow: "none",
        borderRadius: "20px",
        borderBottom: "4px solid #81334b",
        "&:hover": {
            background: "#ed45a0",
            transform: "scale(1.05)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4)",
        }
    }, sndImg: {
        height: "200px",
        width: "100%",
        objectFit: "cover",
        [theme.breakpoints.down('xs')]: {
            height: "400px",
        }
    },
    sndcard: {
        padding: 12,
        background: "#006da8",
        textAlign: "center",
        margin: "0px 3%",
        borderRadius: 12,
        marginTop: "-220px",
        position: "relative",
        boxShadow: "0 3px 5px 0 #00BCD4",
        [theme.breakpoints.down('xs')]: {
            marginTop: "-420px",
        }
    },
    scndt: {
        fontSize: 44,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12,
        textShadow: "1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777",
    },
    scndb: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 17
    }, crdsbtn: {
        background: "#2a6049",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        padding: "10px 20px",
        textAlign: "center",
        justifycontent: "center",
        "&:hover": {
            background: "#2a6049",
        }
    },
    cards: {
        boxShadow: "-7px 7px 1px rgba(0, 0, 0, 0.3)",
        borderRadius: 25,
        padding: 12,
        marginBottom: 80,
        marginTop: 80,

        [theme.breakpoints.down('xs')]: {
            marginBottom: 10,
            marginTop: 30,
        },
        "&:hover": {
            transform: "scale(1.03)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4)",
            cursor: "pointer"
        }
    }, cardbody: {
        height: 150,
        [theme.breakpoints.down('xs')]: {
            height: 180,
        },
    },
    cardst: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 28
    },
    cardsb: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 17,
        lineHeight: "1.4em"
    }, vsnTitlse: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 46,
        textAlign: "center",
        textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
        filter: "drop-shadow(-6.4px 6.2px 8px rgba(0, 0, 0, 0.6))",
        [theme.breakpoints.down('xs')]: {
            fontSize: 34,
        },
    },
    vsnTitle: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 70,
        textAlign: "center",
        textShadow: "1px -1px 0 #767676,-1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a",
        filter: "drop-shadow(-6.4px 6.2px 8px rgba(0, 0, 0, 0.6))",
        [theme.breakpoints.down('xs')]: {
            fontSize: 50,
            marginTop:20
        }
    }, vsnTitleone: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 40,
        textAlign: "center",
        marginTop: 30,
        textShadow: "-1px 2px 1px #737272, -2px 4px 1px #767474",
        marginBottom: 10,
    }, vsnTitledis: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 17,
        textAlign: "center"
    }, vsnTitlesubdis: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 28,
        marginTop: 20,
        textDecoration: "underline",
        textShadow: "-1px 2px 1px #00000033",

    },
    vsnTitlesubdisone: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 18,
        marginTop: 20,
        [theme.breakpoints.down('xs')]: {
            fontSize: 17,
        }
    },
    vsnDis: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        padding: "0px 20px",
        margin: "0px 8%",
        [theme.breakpoints.down('xs')]: {
            margin: "0px",
        }
    }, vsnimg: {
        width: "100%",
        objectFit: "cover",
        height: "100%",

    }, vsnTitl: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 30,
        textAlign: "center",
        marginBottom: 12,
    },
    vsncards: {
        boxShadow: "0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4)",
        background: "#d8e9ff",
        padding: 8,
        margin: 12,
        borderRadius: 12,
        lineHeight: 2,
        // "&:hover": {
        //     transform: "scale(1.05)",
        //     transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4)",
        //     cursor: "pointer"
        // }
    }, li: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 15,
        padding: "0px 8px",
    },
    vsnDistitle: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 20,
        textAlign: "center",
        marginTop: 30,
    }, vsncrdsbtn: {
        marginTop: 30,
        background: "#3498db",
        color: "#fff",
        border: "none",
        borderRadius: 20,
        fontSize: 24,
        padding: "12px 30px",
        margin: "auto",
        display: "block",
        boxShadow: "0 30px 35px 0 rgba(0, 0, 0, 0.06)",
        borderBottom: "4px solid #217bb6",
        textTransform: "unset",
        fontWeight: 600,
        "&:hover": {
            background: "#3498db",
            transform: "scale(1.03)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4)",
        }
    },
    imgsback: {
        marginTop: 40,
        [theme.breakpoints.only('xs')]: {
            marginTop: 40,
        },
        backgroundImage: 'url("https://static.wixstatic.com/media/2e92df_8fed849c70034d8e94f783d8c569a45c~mv2.jpg/v1/fill/w_1899,h_1328,al_c,q_90,usm_0.66_1.00_0.01/2e92df_8fed849c70034d8e94f783d8c569a45c~mv2.webp")',
        padding: "40px 20px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    }, subicon: {
        fontSize: "30px",
        marginBottom: "-6px",
    }, chipdiv: {
        boxShadow: "0px 0.5em 2em -1em #999",
        padding: "40px 20px",
        borderRadius: 20,
        margin: "0px 4%",
        [theme.breakpoints.only('xs')]: {
            marginTop: 0,
        },
    }, chip: {
        padding: 6,
        borderRadius: 20,
        border: "1.5px solid #3a913f",
        color: "#3a913f",
        outline: "none",
        width: "max-content",
        boxShadow: "2px 2px 6px -1px #3d3d3d",
        fontWeight: 600,
        display: "flex",
        fontSize: 14,
        [theme.breakpoints.only('xs')]: {
            fontSize: 12,
        },
    }
});

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

                    </Grid>
                    <Grid className={classes.content}>
                        <Typography className={classes.t}>Welcome to the land
                        of pure and native
                        A2 Cow Milk
                                    </Typography>
                        <Typography className={classes.d}>O2 Native cow milk welcomes you</Typography>
                        <Button className={classes.btn}> Subscribe Milk Now</Button>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <img alt="img" className={classes.sndImg} src="https://static.wixstatic.com/media/2e92df_f92a273c2e1041a0b33e12316aafc2eb~mv2.png/v1/fill/w_1899,h_179,al_c,q_85,usm_0.66_1.00_0.01/2e92df_f92a273c2e1041a0b33e12316aafc2eb~mv2.webp" />
                        <div className={classes.sndcard}>
                            <Typography className={classes.scndt}>Who we are</Typography>
                            <Typography className={classes.scndb}>We at O2 Native Cow milk aim for the production of native farm fresh cow milk and nutritious organic products such as honey, ghee, vegetables and other goodies. Being Farmers by profession since three generations and ten whole decades! ,we toil to produce inconsistent, unadulterated native cow milk and organic products in traditional methods that date back to almost five centuries!</Typography>
                        </div>
                    </Grid>
                </Grid>
                <div className={classes.imgsback}>
                    <Grid container>
                        <Grid item xs={12} lg={12}>
                            <Typography className={classes.vsnTitle}> Our Vision</Typography><br />
                            <Typography className={classes.vsnDis}>O2 Native Cow milk aim for the production of native farm fresh cow milk and nutritious organic products such as honey, ghee, vegetables and other goodies</Typography>
                            <Grid container>
                                <Grid item xs={12} sm={4}>
                                    <img alt="img" className={classes.vsnimg} src="https://static.wixstatic.com/media/2e92df_5cb375fc674b4ee38c061b844bfd4a24~mv2.png/v1/fill/w_750,h_780,al_c,q_90,usm_0.66_1.00_0.01/Bottle%20compressed-min.webp" />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <Typography className={classes.vsnTitleone}>Subscription at your comfort!</Typography>
                                    <Typography className={classes.vsnTitledis}>We care for your comforts. You can pause and resume subscriptions whenever you want. Choose from your options of subscription that suits your routine and get your organic supplements delivered to you right away.</Typography>

                                    <Typography className={classes.vsnTitlesubdis}>Sample</Typography>
                                    <Typography className={classes.vsnTitlesubdisone}>Not sure about the feasibility of delivery and quality of milk? Subscribe to a sample plan for up to 3 days.</Typography>

                                    <Typography className={classes.vsnTitlesubdis}>Subscription</Typography>
                                    <Typography className={classes.vsnTitlesubdisone}>
                                        {homePage?.Subscription?.map(item => {
                                            return <li><span style={{
                                                marginLeft: "-10px", letterSpacing: 1, fontSize: 16, fontWeight: "bold",
                                            }}>{item.name}<span style={{ fontWeight: 600, fontSize: 13 }}>&nbsp;{item.dis}</span></span></li>
                                        })}
                                    </Typography>
                                    <Typography className={classes.vsnDistitle}>Now that you've come this far, try a sample of our farm fresh, creamy, A2 milk</Typography>
                                    <br />
                                    <Button
                                        className={classes.vsncrdsbtn}
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                    >
                                        Subscribe Now  <NavigateNextIcon className={classes.subicon} /></Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* <Grid item xs={12} lg={4}>
                            <Card className={`${classes.vsncards}`}>
                                <Typography className={classes.vsnTitl}>Areas of Service</Typography>
                                <Grid container>
                                    <Grid item xs={6}>
                                        {homePage?.list?.list1.map(l => {
                                            return <li className={classes.li}><span style={{ marginLeft: "-10px" }}>{l}</span></li>
                                        })}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {homePage?.list?.list2.map(l => {
                                            return <li className={classes.li}><span style={{ marginLeft: "-10px" }}>{l}</span></li>
                                        })}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid> */}
                    </Grid>
                </div><br />

                <Typography className={classes.vsnTitlse}>Areas of Service</Typography>
                <br />
                <div className={classes.chipdiv}>
                    <Grid container spacing={2}>
                        {homePage?.list?.all.map(l => {
                            return <Grid item>
                                <div className={classes.chip}>
                                    <i class="fa fa-map-marker lo"></i> {l}
                                </div>
                            </Grid>
                        })}
                    </Grid>
                </div>
                <Container>
                    <Grid container spacing={2}>
                        {homePage?.cards?.data.map(val => {
                            return <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Card className={`card ${classes.cards}`}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={val.img}
                                            style={{ borderRadius: 12 }}
                                        />
                                        <CardContent className={classes.cardbody}>
                                            <Typography align="center" gutterBottom variant="h5" component="h2" className={classes.cardst}>
                                                {val.name}  </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardsb}>
                                                {val.dis}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{ justifyContent: "center" }}>
                                        <Button
                                            className={classes.crdsbtn}
                                            variant="contained"
                                            size="small"
                                            color="primary"
                                        >
                                            Subscribe now <NavigateNextIcon />   </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                </Container>

                <br /></div >
        );
    }
}

export default withStyles(useStyles)(Dashboard);