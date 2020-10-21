import React from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const data = [
    {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000137_18-fresho-mint-leaves.jpg",
        name: "Mint Leaves",
        rs: "5778",
        dis: "9878"
    },
    {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000148_28-fresho-onion.jpg",
        name: "Onion - Medium/Vengayam",
        rs: "5778",
        dis: "9878"
    },
    {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000072_16-fresho-carrot-local.jpg",
        name: "Carrot - Local",
        rs: "5778",
        dis: "9878"
    },
    {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000203_16-fresho-tomato-local.jpg",
        name: "Tomato Local - Grade A/Naattu Thakkali",
        rs: "5778",
        dis: "9878"
    },
    {
        img: "https://www.bigbasket.com/media/uploads/p/s/10000103_16-fresho-cucumber.jpg",
        name: "Cucumber",
        rs: "5778",
        dis: "9878"
    }
]
const useStyles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    card: {
        boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important",
        borderRadius: 16,
        width: "100%",
        overflow: "hidden",
        width: "96%",
        margin: "10px 0px"
    },
    cardAtionspadding: {
        padding: 0,
        margin: 0,

    },
    priceClass: {
        padding: "10px",
        display: 'flex',
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        borderRadius: '0 !important',
        opacity: "1.2",
        "&:hover": {
            boxShadow: "40 0 11px rgba(33,33,33,.2)",
            cursor: "pointer"
        },
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            paddingLeft: '10px !important'
        },
        '& div': {
            padding: '0 !important'

        },
    },
    priceClassMain: {
        margin: 'auto !important',
    },
    offerMainPrice: {
        color: "#ed1165",
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.9rem'
        },
        '& i': {
            fontSize: "26px", paddingRight: "5px",
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.9rem'
            },
        }

    },
    offerPrice: {
        fontSize: "0.8rem",
        lineHeight: 0,
        color: "#828282",
        width: 'fit-content',
        flex: 0.7,
        textAlign: 'center',
        padding: 5,
        "&:span": {
            margin: 0
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'left',
            padding: '0 !important',
            paddingTop: '4px !important',
            paddingBottom: '4px !important',
            padding: 5,
        },
    },
    cardContent: {
        width: "100%"
    },
    textPriceCardGrid: {
        display: 'flex',
        width: "100%",
    },
    titles: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: "90%",
        paddingLeft: 5,
        fontSize: 16,
        color: "#000",
        letterSpacing: 2,
    },
    cardActionsImage: {
        margin: 0,
        height: "300px",
        cursor: "pointer"

    }
});
class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPath: ""
        };
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container style={{ margin: "30px 0px" }}>
                {data.map(item => {
                    return <Grid item xs={12} sm={4} md={3}>
                        <div className={classes.root}>

                            <Card className={classes.card} >
                                <CardActions style={{
                                }} className={`${classes.cardAtionspadding} ${classes.cardActionsImage}`}>
                                    <img style={{ objectFit: "scale-down" }} width="100%" height="100%s" src={item.img} />
                                </CardActions>

                                <Card className={classes.priceClass}>
                                    <CardContent className={classes.cardContent} style={{ display: 'flex' }}>
                                        <Grid
                                            container
                                            item
                                            xs={12}
                                            className={classes.textPriceCardGrid}
                                            alignItems="center"
                                        >
                                            <Typography variant="body1"
                                                component="span" style={{ paddingLeft: "5px" }} className={`${classes.titles}`}>
                                                {item.name}
                                            </Typography>
                                            <Grid container item xs={12} sm={12} className={`${classes.priceClassMain}`} style={{ alignItems: "center" }}>
                                                <Typography
                                                    variant="h6"
                                                    component="h6"
                                                    className={classes.offerMainPrice}
                                                    style={{
                                                        width: "100%",
                                                        justifyContent: "flex-start",
                                                        display: "flex",
                                                        paddingLeft: "5px",

                                                    }}>

                                                    {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(item.rs))}
                                                </Typography>
                                                <Typography
                                                    style={{
                                                        width: "100%",
                                                        justifyContent: "flex-start",
                                                        display: "flex",
                                                        marginTop: "4px"
                                                    }}
                                                    gutterBottom
                                                    variant="body1"
                                                    component="span"
                                                    className={classes.offerPrice}
                                                >
                                                    <del>
                                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(item.dis))}
                                                    </del>

                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Card>
                        </div > </Grid>
                })}
            </Grid>
        );
    }
};
export default withRouter(withStyles(useStyles)(Store));