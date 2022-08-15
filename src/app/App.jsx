import React from "react";
import "./App.css";
import { NightMode } from "../components/NightMode";
import { About } from "../components/About";

export const App = () => {
    return (
        <React.Fragment>
            <NightMode />
            <About />
        </React.Fragment>
    );
};



