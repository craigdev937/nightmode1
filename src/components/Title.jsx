import React from "react";
import "./Title.css";

export const Title = (props) => {
    return (
        <main className="title__wrapper">
            <p className="title__sec">{props.secondary}</p>
            <p className="title__pri">{props.primary}</p>
        </main>
    );
};



