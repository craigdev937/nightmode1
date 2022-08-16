import React from "react";
import "./About.css";
import Andi from "../img/profile.jpg";
import { Title } from "../components/Title";
import { ThemeContext } from "../context/Toggle";

const crimson = "#dc143c";

export const About = () => {
    const theme = React.useContext(ThemeContext);
    const night = theme.state.nightMode;

    return (
        <main>
            <aside className="about">
                <Title secondary="Who am I?" primary="My Story" />
                <section className="about__left">
                    <div className="about__card"
                        style={{ boxShadow: night && `-8px 8px 2px 2px ${crimson}` }}
                    >
                        <img className="about__img" src={Andi} alt="Andi" />
                    </div>
                </section>
                <section className="about__right">
                    <p className="about__subtitle">
                        Professional software engineer with over 4 years of Experience
                    </p>
                    <p className="about__description">
                        I'm baby jianbing woke praxis, succulents organic shabby chic vice
                        four loko health goth freegan 3 wolf moon kinfolk. Jianbing
                        literally forage yes plz actually +1 retro hammock hoodie vinyl
                        everyday carry poutine umami. Paleo hell of 90's leggings keytar
                        twee post-ironic irony. Raclette meh butcher, skateboard you
                        probably haven't heard of them stumptown pork belly readymade YOLO
                        distillery 3 wolf moon. Taiyaki +1 gochujang edison bulb, bespoke
                        cray cliche. Pug meggings church-key venmo prism. Prism celiac
                        hashtag 3 wolf moon, jean shorts trust fund farm-to-table
                        post-ironic sartorial vaporware blog adaptogen pok pok meggings
                        quinoa.{" "}
                    </p>
                </section>
            </aside>
        </main>
    );
};



