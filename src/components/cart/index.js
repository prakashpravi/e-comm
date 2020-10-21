import React from "react";
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import { Grid } from "@material-ui/core";

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
];

const useStyles = theme => ({
    root: {
        width: "100%",
        margin: "50px 10px",
        overflow: "hidden"
    }, winerow: {
        display: "flex",
        height: 70,
        padding: "10px 0px",
        border: "1px solid #ddd",
        borderRadius: 12,
    }, winetextcontainer: {
        justifyContent: "center",
        margin: "auto",
        marginLeft: 0
    }, img: {
        width: "60px",
        border: "1px solid #ddd",
        borderRadius: 12,
        margin: "0px 12px"
    }, titles: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: "100%",
        fontSize: 16,
        color: "#000",
        letterSpacing: 2,
        [theme.breakpoints.down('xs')]: {
            width: "80%",
        }
    },
});

class Cart extends React.Component {
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
                <Grid container spacing={2}>
                    {data.map(cart => {
                        return <Grid item xs={12} sm={4}>
                            <div className={classes.winerow}>
                                <img className={classes.img} src={cart.img} />
                                <div className={classes.winetextcontainer}>
                                    <div className={classes.titles}>{cart.name}</div>
                                    <div style={{ fontWeight: "bold" }}>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(Math.round(cart.rs))}</div>
                                </div>
                            </div>
                        </Grid>
                    })}
                </Grid>
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Cart));