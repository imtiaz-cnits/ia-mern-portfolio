import React, {useEffect} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import PortfolioDetails from "../components/Portfolio/PortfolioDetails.jsx";
import PortfolioStore from "../store/PortfolioStore.js";
import {useParams} from "react-router-dom";

const PortfolioDetailsPage = () => {
    const {portfolioDetailsRequest} = PortfolioStore();
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            await portfolioDetailsRequest(id);
        })()
    }, [id]);

    return (
        <MasterLayout>
            <PortfolioDetails/>
        </MasterLayout>
    );
};

export default PortfolioDetailsPage;