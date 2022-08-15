import React from "react";
import "./App.css";
import { NightMode } from "../components/NightMode";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

export const App = () => {
    return (
        <React.Fragment>
            <NightMode />
            <Hero />
            <About />
        </React.Fragment>
    );
};



