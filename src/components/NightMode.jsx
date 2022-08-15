import React from "react";
import "./NightMode.css";
import { FaSun } from "react-icons/fa";
import { BsFillMoonFill } from "react-icons/bs";

export const NightMode = () => {
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
            <section className="toggle__button">
                
            </section>
        </main>
    );
};



