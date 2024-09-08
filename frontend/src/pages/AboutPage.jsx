import React from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import AboutHero from "../components/About/AboutHero.jsx";
import AboutImageView from "../components/About/AboutImageView.jsx";
import AboutMe from "../components/About/AboutMe.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Founder from "../components/About/Founder.jsx";
import Client from "../components/Client/Client.jsx";

const AboutPage = () => {
    return (
        <MasterLayout>
            <AboutHero />
            <AboutImageView />
            <AboutMe />
            <Experience />
            <Founder />
            <Client />
        </MasterLayout>
    );
};

export default AboutPage;