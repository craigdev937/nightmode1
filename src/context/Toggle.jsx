import React from "react";

const initialState = {
    nightMode: false
};

export const ThemeContext = React.createContext();

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                nightMode: !state.nightMode
            };
        default:
            return state;
    };
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = 
        React.useReducer(ThemeReducer, initialState);
    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    );
};



