import React from "react";

export const AuthContext = React.createContext({
    user: {},
    setAuth: () => null
})

export const SnackBarContext = React.createContext({
    open: false,
    type: '',
    msg: '',
    vertical: 'top',
    horizontal: 'center', 
    onclose: () => null,
    setSnack: () => null
})


export const ThemeContext = React.createContext({
    isDarkTheme: false,
    setTheme: () => null
});

export const searchResults = React.createContext({
    searchText: "",
    persnoalDetails: [],
    setSearchResults: () => null
})
