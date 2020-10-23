import React from 'react';
import MaterialTable from 'material-table';
import { withRouter } from "react-router-dom";
import withStyles from '@material-ui/core/styles/withStyles';
import { Container } from '@material-ui/core';

const useStyles = theme => ({
    root: {
        width: "100%",
        margin:"50px 0px"
    }
})

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Name', field: 'name' },
                { title: 'Mobile', field: 'mobile' },
                { title: 'Email', field: 'email' },
                { title: 'Address', field: 'address' },
            ],
            data: [
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
                { name: 'Mehmet', mobile: '1234567843', email: "example@gmail.com", address: "No 0, xyz address, Chennai Tamilnadu" },
            ],
        };
    }
    render() {
        const { classes } = this.props;
        const { columns, data } = this.state;
        return (
            <div className={classes.root}>
               <Container>
               <MaterialTable
                    title="Users Data"
                    columns={columns}
                    data={data}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
               </Container>
            </div>
        );
    }
};

export default withRouter(withStyles(useStyles)(Admin));