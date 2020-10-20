import React from 'react';

// {*----------home page Signup components imports-----------*}

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography, TextField, withStyles } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { withRouter } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// {*----------home page Signup style-----------*}
const useStyles = theme => ({
  root: {
    backgroundImage: "url(assets/images/gallery/12.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    // display: "flex",
    height: "auto",
    justifyContent: "center",
    width: "100%",
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(63, 40, 3, 0.7)",
    color: " #555555",
    borderRadius: 12,
    padding: 20,
    width: "60vw",
    margin: "auto",
    background: "#fff",
    [theme.breakpoints.down('xs')]: {
      width: "80%",
    },
  },
  discription: {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    marginTop: "20px",
    color: "#000"
  },
  letter: {
    color: "#80B500",
    cursor: "pointer",
    fontWeight:"bold"
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
  }, text: {
    textAlign: "center",
    fontSize: 40,
    margin: "30px",
    color: "#fff",
    [theme.breakpoints.down('xs')]: {
      fontSize: 30,
    },
  },
});
// InitialState
const initialState = {
  area: null,
  ordertype: null,
  productlist: null,
  date: null,
  quantity: null,
  plan: null
}
// end
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleChange = (name, val) => {
    this.setState({
      ...this.state,
      [name]: val
    });
  };
  render() {
    const { classes } = this.props;
    const { area, date, quantity, ordertype, plan, productlist } = this.state;
    return (
      <Grid className={classes.root}>
        <h3 className={classes.text}><br />Please Signup to Continue</h3> <br />
        <div className={classes.paper}>
          <h3 className={classes.title}>
            <img alt="img" src="assets/images/bg_2.png" width="70px" style={{ marginBottom: -23 }} />
            Signup</h3>
          <Grid container component="main" >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography className={classes.discription} variant="body1">{"Order Sample/Subscribe to O2 Native Milk"}</Typography>
              <Typography className={classes.discription} variant="body1">{"PERSONAL DETAILS"}</Typography>
              <br />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Name" variant="outlined" type="text" className={classes.input} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Email" variant="outlined" className={classes.input} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Address" variant="outlined" className={classes.input} /></Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth={true}
                    size="small"
                    value={area}
                    options={[
                      { value: "60001" },
                      { value: "60072" },
                    ]}
                    getOptionLabel={(option) => option.value}
                    name="Area"
                    onChange={(e, value) => {
                      this.handleChange("area", value);
                      // onChange("currentFilter", value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Area"
                        placeholder="Area"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Password" variant="outlined" className={classes.input} /></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Retype Password" variant="outlined" className={classes.input} /></Grid>
                <Grid item xs={12} sm={6}>
                  <TextField size="small" label="Mobile Number" variant="outlined" className={classes.input} /></Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth={true}
                    size="small"
                    value={ordertype}
                    options={[
                      { value: "Subscription for 30days" },
                      { value: "Sample(One time purchase)" },
                    ]}
                    getOptionLabel={(option) => option.value}
                    name="Order Type"
                    onChange={(e, value) => {
                      this.handleChange("ordertype", value);
                      // onChange("currentFilter", value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label=""
                        placeholder="Order Type"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth={true}
                    size="small"
                    value={productlist}
                    options={[
                      { value: "60001" },
                      { value: "60072" },
                    ]}
                    getOptionLabel={(option) => option.value}
                    name="Product List"
                    onChange={(e, value) => {
                      this.handleChange("productlist", value);
                      // onChange("currentFilter", value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Product List"
                        placeholder="Product List"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      format="dd/MM/yyyy"
                      autoOk
                      variant="inline"
                      margin="dense"
                      id="date-picker-inline"
                      orientation="portrait"
                      label="Subcription Starting Date"
                      value={date}
                      onChange={e => this.handleChange("date", e.target.value)}
                      inputVariant={"outlined"}
                      style={{ width: "100%", margin: 0 }}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth={true}
                    size="small"
                    value={quantity}
                    options={[
                      { value: "0.5" },
                      { value: "1" },
                    ]}
                    getOptionLabel={(option) => option.value}
                    name="Milk Quantity"
                    onChange={(e, value) => {
                      this.handleChange("quantity", value);
                      // onChange("currentFilter", value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Milk Quantity"
                        placeholder="Milk Quantity"
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Autocomplete
                    fullWidth={true}
                    size="small"
                    value={plan}
                    options={[
                      { value: "weekdays" },
                      { value: "daily" },
                    ]}
                    getOptionLabel={(option) => option.value}
                    name="Select Plan"
                    onChange={(e, value) => {
                      this.handleChange("plan", value);
                      // onChange("currentFilter", value)
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        label="Select Plan"
                        placeholder="Select Plan"
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <br /> <br />
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid><div className={classes.letter}>Total Cost</div></Grid>
                <Grid> <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={() => this.props.history.push("/home")}
                >Create account <NavigateNextIcon />
                </Button> </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div><br />
      </Grid >
    );
  }
};

export default withRouter(withStyles(useStyles)(Signup));