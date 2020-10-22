import React from 'react';
import {
    Container,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    Avatar,
    Grid,
    Button,
    TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const useStyles = theme => ({
    panelheader: {
        width: "100%"
    },
    normalcolorback: {
        width: "60px",
        height: "60px",
    }, titles: {
        marginTop: 20,
        fontWeight: 600,
        [theme.breakpoints.down('xs')]: {
            marginTop: 14,
        },
    }, input: {
        width: "100%"
    }, body: {
        padding: "20px 0px",
        width: "100%"
    }, btn: {
        padding: "10px 26px",
        background: "#3e4958",
        color: "#fff",
        float: "right",
        "&:hover": {
            color: "#3e4958",
            background: "#fff",
            border: "1px solid #3e4958"
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 30,
        },
    }
});
class Checkout extends React.Component {
    state = {
        expanded: 'panel',
    }

    handleChange = panel => (event) => {
        const state = this.state;
        let v = state.expanded === panel ? null : panel
        this.setState({
            expanded: v,
        });
    };

    render() {
        const { expanded } = this.state;
        const { classes } = this.props;
        return (
            <Container>
                <div style={{ margin: "50px 0px" }}>
                    <ExpansionPanel
                        square
                        expanded={expanded === 'panel'}
                        onChange={this.handleChange("panel")}
                        style={{ boxShadow: "none", borderRadius: 12 }}
                        className={classes.panelheader}
                    >
                        <ExpansionPanelSummary style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px", borderRadius: 4 }} expandIcon={<ExpandMoreIcon />}>
                            <Avatar className={classes.normalcolorback} src="assets/images/bg_2.png"></Avatar><Typography className={classes.titles}> Purchase with O2 Native Cow Milk
                           </Typography>
                        </ExpansionPanelSummary >
                        <ExpansionPanelDetails style={{ boxShadow: "rgb(222, 218, 218) 1px 2px 6px 0px" }}
                        >
                            <div className={classes.body}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField size="small" label="Amount (INR)" variant="outlined" className={classes.input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField size="small" label="Purchase Info" variant="outlined" className={classes.input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField size="small" label="Name" variant="outlined" className={classes.input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField size="small" label="Email" variant="outlined" className={classes.input} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField size="small" label="Card Mobile/Cell Number" variant="outlined" className={classes.input} />
                                    </Grid>
                                </Grid>
                                <Button className={classes.btn}>Pay Now</Button>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </Container>

        )
    }
}

export default withRouter(withStyles(useStyles)(Checkout));