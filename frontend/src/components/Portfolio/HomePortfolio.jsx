import React from 'react';
import PortfolioImg1 from "../../assets/images/portfolio_img_1.png";
import PortfolioImg2 from "../../assets/images/portfolio_img_2.png";
import PortfolioImg3 from "../../assets/images/portfolio_img_3.png";

const HomePortfolio = () => {
    return (
        <>
            <section id="home_portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="home_portfolio_head">
                                <div className="home_portfolio_head_title">
                                    <h4>Portfolio</h4>
                                    <h1>Latest Work</h1>
                                </div>
                                <div className="home_portfolio_btn_wrap">
                                    <button type="button" className="home_portfolio_btn">Explore More</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home_portfolio_wrapper">
                        <div className="home_portfolio_item">
                            <div className="home_portfolio_item_wrap">
                                <img src={PortfolioImg1} alt=""/>
                                <div className="home_portfolio_item_overlay">
                                    <div className="home_portfolio_info">
                                        <span>Design</span>
                                        <h2>SOFA</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home_portfolio_item">
                            <div className="home_portfolio_item_wrap">
                                <img src={PortfolioImg2} alt=""/>
                                <div className="home_portfolio_item_overlay">
                                    <div className="home_portfolio_info">
                                        <span>Branding</span>
                                        <h2>KeyBoard</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home_portfolio_item">
                            <div className="home_portfolio_item_wrap">
                                <img src={PortfolioImg3} alt=""/>
                                <div className="home_portfolio_item_overlay">
                                    <div className="home_portfolio_info">
                                        <span>Illustration</span>
                                        <h2>Work Media</h2>
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

export default HomePortfolio;