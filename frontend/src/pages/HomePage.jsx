import React from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import HomeHero from "../components/Hero/HomeHero.jsx";
import Service from "../components/Service/Service.jsx";
import HomePortfolio from "../components/Portfolio/HomePortfolio.jsx";
import HomeAbout from "../components/About/HomeAbout.jsx";
import Experience from "../components/Experience/Experience.jsx";
import Feature from "../components/Feature/Feature.jsx";
import Review from "../components/Review/Review.jsx";
import Client from "../components/Client/Client.jsx";
import HomeBlog from "../components/Blog/HomeBlog.jsx";
import HomeContact from "../components/Contact/HomeContact.jsx";

const HomePage = () => {
    return (
        <MasterLayout>
            <HomeHero/>
            <Service/>
            <HomePortfolio/>
            <HomeAbout/>
            <Experience/>
            <Feature/>
            <Review/>
            <Client/>
            <HomeBlog/>
            <HomeContact/>
        </MasterLayout>
    );
};

export default HomePage;