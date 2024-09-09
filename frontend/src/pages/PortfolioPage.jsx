import React, {useEffect} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import PortfolioHero from "../components/Portfolio/PortfolioHero.jsx";
import ProjectHelp from "../components/Feature/ProjectHelp.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import PortfolioStore from "../store/PortfolioStore.js";
import {CategoryStore} from "../store/CategoryStore";

const PortfolioPage = () => {
    const {portfolioListRequest} = PortfolioStore();
    const {portfolioCategoryRequest} = CategoryStore();

    useEffect(() => {
        (async () => {
            await portfolioListRequest();
            await portfolioCategoryRequest();
        })();
    }, []);

    return (
        <MasterLayout>
            <PortfolioHero />
            <Portfolio />
            <ProjectHelp />
        </MasterLayout>
    );
};

export default PortfolioPage;