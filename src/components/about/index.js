import React from "react";
import { withStyles, Typography, CardActionArea, CardMedia, Card, CardContent, Button, Container } from '@material-ui/core';
// {* -------------about  import  compoents -------------*}

import {
    Grid,
} from "@material-ui/core";
// {* -------------about styles-------------*}
const homePage = {

    "cards": {
        "data": [
            {
                name: "Free Roaming",
                dis: "Cows in our farm roam freely and we allow them to graze as they wish. It is scientifically proven that happy cows produce top quality milk. The sense of freedom makes them feel happy and safe resulting in quality production.",
                img: "assets/images/home_about/Gir.JPG"
            },
            {
                name: "Health Care",
                dis: "We care for the health of our cows as much as we care for yours. We have inhouse Veterinarians who is always battle ready to treat our cows as soon as possible. We always despise the practice of Vaccination to boost milking,",
                img: "assets/images/home_about/amritmahal.JPG"
            },
            {
                name: "Friendliness",
                dis: "Our cows are always elated with our friendly treatment and they do not feel guilty to generously give us their healthy milk. They are also not overmilked or exhausted and we ensure that the fresh morning milk goes to the calves daily.",
                img: "assets/images/home_about/hariana.JPG"
            }
        ]
    },
    "lastsectiondata": [
        {
            name: "GIR",
            dis: "Hi, Kudos! I am a Gir and also ultra-convex breed. My ancestors traced their origin around Gujarat. I yield 1930 kilograms of milk during my lactation period. My milk is thick white with (4.69 -4.99) % of fat.",
            img: "assets/images/home_about/Gir.JPG"
        },
        {
            name: "Amrit mahal",
            dis: "Hey, beautiful day! I am Amrit Mahal. My native is Mysore, and I am an Indigenous breed of India. During my lactation period, I yield 572 kilograms of milk. My milk contains 5.7% so that it is very creamy.",
            img: "assets/images/home_about/amritmahal.JPG"
        },
        {
            name: "Hariana",
            dis: "Yo! Good day I am Hariana from Haryana. I am whitey with coffin shaped skull. I yield 800 kilograms of milk during my lactation period. My milk is so creamy as it contains 5.3% of fat in it.",
            img: "assets/images/home_about/hariana.JPG"
        },
        {
            name: "Sahiwal",
            dis: "Hello, Good day! My name is Sahiwal I originated at Dry Punjab along Indian Pakistan Border. My yield is 2277 kilograms of milk on my lactation period and I am the one of the best dairy breeds in India. My milk contains 4.5% fat, and so it is very thick and white.",
            img: "assets/images/home_about/Health-min_edited.JPG"
        },
        {
            name: "Umblacherry",
            dis: "Hi, good day! I’m Umblacherry . I am best suited for draught work particularly in rice fields. My ancestors traced their origin around Nagapattinam in Tamil Nadu. I yield 300 kilograms of milk during my lactation period. My milk is not only creamy but also thick. It contains 4.9% fat.",
            img: "assets/images/home_about/Friendliness-min.JPG"
        },
    ]
}
const useStyles = theme => ({
    root: {
        width: "100%",
        height: "100%"
    },
    sndImg: {
        height: "200px",
        width: "100%",
        objectFit: "cover",
        [theme.breakpoints.down('xs')]: {
            height: "300px",
        }
    },
    sndcard: {
        textAlign: "center",
        margin: "0px 3%",
        borderRadius: 12,
        marginTop: "-180px",
        position: "relative",
        boxShadow: "0 3px 5px 0 #00BCD4",
        paddingBottom: 18,
        [theme.breakpoints.down('xs')]: {
            marginTop: "-200px",
        }
    },
    scndt: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#DBDBDB",
        marginBottom: 12
    },
    scndb: {
        fontWeight: "bold",
        color: "#fff",
        fontSize: 17,
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
        height: 150
    },
    cardst: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 28
    },
    cardsb: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 14,
        lineHeight: "1.4em"
    },
    crdsbtn: {
        background: "#fff",
        color: "darkslategrey",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        padding: "10px 20px",
        textAlign: "center",
        justifycontent: "center",
        boxShadow: "0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4)",
        "&:hover": {
            color: "#fff",
            boxShadow: "0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4)",
            background: "#369add",
        }
    }, msncrdsbtn: {
        background: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        fontSize: "14px",
        padding: "10px 20px",
        textAlign: "center",
        justifycontent: "center",
        boxShadow: "0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4)",
        "&:hover": {
            color: "#000",
            boxShadow: "0 45px 100px rgba(14,21,47,0.4), 0 16px 40px rgba(14,21,47,0.4)",
            background: "#fff",
            border: "1px solid #000"
        }
    }, about: {
        textAlign: "center",
        margin: 8,
    }, aboutt: {
        fontSize: "50px",
        fontWeight: "bold",
        letterSpacing: "2px",
        color: "#fff",
        textTransform: "uppercase",
        marginBottom: 12
    }, aboutd: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#fff",
        lineHeight: "1.4em",
        textAlign: "center",
    }, msnt: {
        color: "#000",
        fontSize: "50px",
        fontWeight: "bold",
        letterSpacing: "2px",
        textTransform: "uppercase",
        marginBottom: 12
    }, msnd: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#000",
        lineHeight: "1.4em",
        textAlign: "center",
    },
    sndImg1: {
        height: "300px",
        width: "100%",
        objectFit: "cover",
        [theme.breakpoints.down('xs')]: {
            height: "500px",
        }
    },
    sndcard1: {
        padding: 12,
        background: "#fff",
        textAlign: "center",
        margin: "0px 3%",
        borderRadius: 12,
        marginTop: "-220px",
        position: "relative",
        boxShadow: "0 3px 5px 0 #00BCD4",
        [theme.breakpoints.down('xs')]: {
            marginTop: "-450px",
        }
    },
    scndt1: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 12,
        letterSpacing: ".15em",
        textShadow:
            "1px -1px 0 #767676,-1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181",
    },
    scndb1: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 17,
        background: "#fff"
    }, cowvar: {
        fontSize: 62,
        overflowWrap: "break-word",
        color: " #fff",
        fontWeight: "bold",
        textAlign: "center",
        background: "#465e7c",
        padding: "20px 0px",
        marginTop: 50,
        [theme.breakpoints.down('xs')]: {
            fontSize: 42,
        }
    }, cards1: {
        boxShadow: "-6px 6px 1px rgba(0, 0, 0, 0.3)",
        borderRadius: 25,
        marginBottom: 80,
        marginTop: 80,
        margin: 10,

        [theme.breakpoints.down('xs')]: {
            marginBottom: 50,
            marginTop: 50,
        },
        "&:hover": {
            transform: "scale(1.03)",
            transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1.4)",
            cursor: "pointer"
        }
    }, cardbody1: {
        height: 210,
        [theme.breakpoints.down('xs')]: {
            height: 150,
        },
    },
    cardst1: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 21
    },
    cardsb1: {
        fontWeight: "bold",
        color: "#000000",
        fontSize: 13,
        lineHeight: "1.4em"
    }, abt: {
        padding: "60px 30px",
        [theme.breakpoints.down('xs')]: {
            padding: "60px 10px",
        },
    }
});

// InitialState
const initialState = {
    data: null,
}
// end
class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        // fetch data function
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <img alt="img" className={classes.sndImg} src="https://static.wixstatic.com/media/2e92df_f92a273c2e1041a0b33e12316aafc2eb~mv2.png/v1/fill/w_1899,h_179,al_c,q_85,usm_0.66_1.00_0.01/2e92df_f92a273c2e1041a0b33e12316aafc2eb~mv2.webp" />
                        <div className={classes.sndcard}>
                            <Typography className={classes.scndt}>Meet Our Cows</Typography>
                            <Typography className={classes.scndb}>Cows in our Farm get these Privileges</Typography>
                        </div>
                    </Grid>
                </Grid>

                <Container>
                    <br /> <Grid container spacing={2}>
                        {homePage?.cards?.data.map(val => {
                            return <Grid item xs={12} sm={6} md={4} lg={4}>
                                <Card className={`card ${classes.cards}`}>
                                    <CardActionArea>
                                        <CardMedia
                                            alt="img" component="img"
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
                                </Card>
                            </Grid>
                        })}
                    </Grid>
                    <br /> </Container>
                <div className={classes.abt} style={{
                    background: "#369add",
                }}>
                    <Grid container >
                        <Grid item xs={12} sm={6}>
                            <img alt="img" width="100%" src="assets/images/gallery/3.JPG" style={{ borderRadius: 20 }} />
                        </Grid>
                        <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
                            <div className={classes.about}>
                                <Typography className={classes.aboutt}>ABOUT<span style={{ color: "#000" }}>US</span></Typography>
                                <Typography className={classes.aboutd}>We at O2 Native Cow milk aim for the production of native farm fresh cow milk and nutritious organic products such as honey, ghee, vegetables and other goodies. Being Farmers by profession since three generations and ten whole decades! . We toil to produce inconsistent, unadulterated, native cow milk and organic products in traditional methods that date back to almost five centuries!</Typography>
                                <br />
                                <br />
                                <Button
                                    className={classes.crdsbtn}
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                >
                                    SHOP NOW ! </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div style={{
                    background: "#fff",
                }} className={classes.abt}>
                    <Grid container >
                        <Grid item xs={12} sm={6} style={{ margin: "auto" }}>
                            <div className={classes.about}>
                                <Typography className={classes.msnt}>OUR MISSION</Typography>
                                <Typography className={classes.msnd}>Our primary goal is to nurture the society and its offsprings with our best efforts, a dedicated village and a farmer's society working diligently to nourish the indigenous cow breeds</Typography>
                                <br />
                                <br />
                                <Button
                                    className={classes.msncrdsbtn}
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                >
                                    SHOP NOW ! </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img alt="img" width="100%" src="assets/images/home_slider/DSC_0605-min.JPG" style={{ borderRadius: 20 }} />
                        </Grid>
                    </Grid>
                </div>


                <Grid container>
                    <Grid item xs={12}>
                        <img alt="img" className={classes.sndImg1} src="assets/images/gallery/7.JPG" width="100%" height="100%" />
                        <div className={classes.sndcard1}>
                            <Typography className={classes.scndt1}>Farmers' Welfare</Typography>
                            <Typography className={classes.scndb1}>More than 10% of the revenue generated by O2 Native Cow Milk and Organic Foods go to the farmers who toil for the better production of Native Milk and Vegatables.Keeping in mind that farming is the backbone of our Nation, we always ensure that they get back the ration that their dilligence deserves.</Typography>
                        </div>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={12}>
                        <div className={classes.cowvar}>Cow Varieties</div>
                    </Grid></Grid>

                <Grid container >
                    <Grid item xs={12} sm={1} md={1} lg={1} />
                    {homePage?.lastsectiondata.map(val => {
                        return <Grid item xs={12} sm={5} md={2} lg={2}>
                            <Card className={`card ${classes.cards1}`}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={val.img}
                                        style={{ borderRadius: 12 }}
                                    />
                                    <CardContent className={classes.cardbody1}>
                                        <Typography align="center" gutterBottom variant="h5" component="h2" className={classes.cardst1}>
                                            {val.name}  </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" className={classes.cardsb1}>
                                            {val.dis}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    })}
                    <Grid item xs={12} sm={1} md={1} lg={1} />
                </Grid>


            </div >
        );
    }
}

export default withStyles(useStyles)(About);