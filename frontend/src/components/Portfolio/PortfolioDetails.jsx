import React from 'react';
import {PortfolioStore} from "../../store/PortfolioStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {useNavigate} from "react-router-dom";

const PortfolioDetails = () => {
    const {portfolioDetails} = PortfolioStore();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // equivalent to history.goBack()
    };

    return (
        <>
            <section id="project_details">
                <div className="container">
                    <div className="project_details_wrapper">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-sm-10">
                                <div className="project_details_content">
                                    <button onClick={handleBack} className="back_btn">
                                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M5.03021 0L6.33508 1.28545L3.50442 4.09273H15V5.90727H3.50442L6.33508 8.71455L5.03021 10L0 5L5.03021 0Z"
                                                  fill="white"/>
                                        </svg>
                                        <span>Back to portfolio</span>
                                    </button>

                                    <h1 className="project_title">{portfolioDetails[0]["title"]}</h1>
                                    <h3 className="project_sub_title">{portfolioDetails[0]["sub_title"]}</h3>
                                    <p className="project_des">{portfolioDetails[0]["des"]}</p>
                                </div>

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="project_details">
                                            <h4>Category</h4>
                                            <p>{portfolioDetails[0]["portfolio_category"]["category_name"]}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project_details">
                                            <h4>Client</h4>
                                            <img src={portfolioDetails[0]["client"]["client_logo"]} alt=""/>
                                        </div>

                                        <div className="project_details">
                                            <h4>Date</h4>
                                            <p>{portfolioDetails[0]["createdAt"]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="project_single_img">
                                    <img src={portfolioDetails[0]["img2"]} alt=""/>
                                </div>

                                <div className="project_social_wrapper">
                                    <h4>SHARE ON</h4>
                                    <div className="project_social_items">
                                        <a href="#" className="project_social_item">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="project_social_item">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="#" className="project_social_item">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetails;