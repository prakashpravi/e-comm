import React, { useState } from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from './contexts'

let liteTheme = createMuiTheme(require('./theme.json'));
let darkTheme = createMuiTheme(require('./theme/darkTheme.json'));

liteTheme = responsiveFontSizes(liteTheme);
darkTheme = responsiveFontSizes(darkTheme);

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    }
}));

const MainApp = (props) => {
    let [theme, setTheme] = useState({
        isDarkTheme: true
    });

    const classes = useStyles();
    const themes = theme.isDarkTheme ? darkTheme : liteTheme;

    return (
        <ThemeContext.Provider value={{ ...theme, setTheme }}>
            <div className={classes.root}>
                <ThemeProvider theme={themes}>
                    <div style={{ backgroundColor: themes.palette.background.default }}>
                        {props.children}
                    </div>
                </ThemeProvider>
            </div>
        </ThemeContext.Provider>
    )
}

export default MainApp;