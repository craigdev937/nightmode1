import React from "react";
import "./Hero.css";
import Andi from "../img/profile.jpg";

export const Hero = () => {
    return (
        <main className="hero" style={{  }}>
            <section className="bottom">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            className="shape__fill">
                        </path>
                </svg>
            </section>
            <section className="hero__left">
                <aside className="hero__left-wrapper">
                    <h2 className="hero__intro">Hi, my name is</h2>
                    <h1 className="hero__name">Jane Doe</h1>
                    <div className="hero__description">
                        I design and develop professional stylish and mordern applications
                        for clients of all sizes using ReactJS, React Native, NodeJS or
                        Express.js,.
                    </div>
                </aside>
            </section>
            <section className="hero__right">
                <aside className="hero__right-img">
                    <img className="hero__img" src={Andi} alt="profile" />
                </aside>
            </section>
        </main>
    );
};


