import React from "react";
import "./NightMode.css";
import { FaSun } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../context/Toggle";

export const NightMode = () => {
    const theme = React.useContext(ThemeContext);
    const night = theme.state.nightMode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <main className="toggle">
            <FaSun 
                className="toggle__icon" 
                color="#FDB813" 
            />
            <BsFillMoonFill 
                className="toggle__icon" 
                color="#1b1e23" 
            />
            <section className="toggle__button"
                style={{ left : night ? "0px" : "25px" }}
                onClick={handleClick}
            >
                
            </section>
        </main>
    );
};



