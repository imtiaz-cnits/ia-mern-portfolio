import React, {useState} from 'react';
import {PortfolioStore} from "../../store/PortfolioStore";
import {CategoryStore} from "../../store/CategoryStore";
import {Link} from "react-router-dom";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";

const Portfolio = () => {
    // portfolio tab
        const tabButtons = document.querySelectorAll(".tab_btn");
        const tabContents = document.querySelectorAll(".tab_content");

        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const targetTab = button.getAttribute("data-tab");

                // Remove active classes
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                tabContents.forEach((content) => {
                    content.classList.remove("active");
                    content.style.opacity = 0;
                });

                // Add active class to the clicked tab button
                button.classList.add("active");

                // Find the target tab content and make it visible
                const targetContent = document.getElementById(targetTab);
                targetContent.classList.add("active");

                // Delay the opacity transition to make it smooth
                setTimeout(() => {
                    targetContent.style.opacity = 1;
                }, 10);
            });
        });

    const {portfolioList} = PortfolioStore();
    const {categoryList} = CategoryStore();
    const [activeTab, setActiveTab] = useState('all');

    const handleTabChange = (category) => {
        setActiveTab(category);
    };

    const filteredItems = portfolioList === null ? (console.log("portfolio")) : (activeTab === 'all' ? portfolioList : portfolioList.filter(item => item["portfolio_category"]["category_name"].toLowerCase().replace(/\s+/g, "_") === activeTab));

    return (
        <>
            <div id="portfolio">
                <div className="container">
                    <div className="portfolio_wrapper">
                        <div className="tab_btns">
                            {categoryList === null ? (console.log("category")) : (
                                categoryList.map((category) => (
                                    <button
                                        key={category["_id"]}
                                        className={`tab_btn ${activeTab === category["category_name"].toLowerCase().replace(/\s+/g, "_") ? 'active' : ''}`}
                                        onClick={() => handleTabChange(category)}
                                    >
                                        {category["category_name"].charAt(0).toUpperCase() + category["category_name"].slice(1)}
                                        <span>{category["category_name"].toLowerCase().replace(/\s+/g, "_") === 'all' ? portfolioList.length : portfolioList.filter(item => item.portfolio_category["_id"] === category["_id"]).length}</span>
                                    </button>
                                ))
                            )}
                        </div>

                        <div className="tab_contents">
                            <div className="row d-flex justify-content-center">
                                {portfolioList === null ? (<PortfolioSkeleton />) : (
                                    portfolioList.map((item) => (
                                        <div className="col-lg-4 col-md-6" key={item["_id"]}>
                                            <Link to={`/portfolio-details/${item["_id"]}`}>
                                                <div className="portfolio_item">
                                                    <img src={item["img1"]} alt={item["title"]}/>
                                                    <div className="portfolio_item_overlay">
                                                        <div className="portfolio_info">
                                                            <span>{item["portfolio_category"]["category_name"]}</span>
                                                            <h2>{item["title"]}</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                )}
                            </div>

                            {/*{activeTab === 'all' && portfolioList.length > 6 && (*/}
                            {/*    <div className="portfolio_btn_wrap">*/}
                            {/*        <button type="button" className="portfolio_btn">Load More</button>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    </div>

                    {/*<div className="portfolio_wrapper">*/}
                    {/*    <div className="tab_btns">*/}
                    {/*        <button className="tab_btn active" data-tab="tab1">Show All <span>14</span></button>*/}
                    {/*        <button className="tab_btn" data-tab="tab2">Web Application <span>6</span></button>*/}
                    {/*    </div>*/}
                    {/*    <div className="tab_contents">*/}

                    {/*        /!*Tab 1*!/*/}
                    {/*        <div className="tab_content active" id="tab1">*/}
                    {/*            <div className="row d-flex justify-content-center">*/}
                    {/*                <div className="col-lg-4 col-md-6">*/}
                    {/*                    <div className="portfolio_item">*/}
                    {/*                        <img src="./assets/images/portfolio/portfolio_img_1.png" alt=""/>*/}
                    {/*                        <div className="portfolio_item_overlay">*/}
                    {/*                            <div className="portfolio_info">*/}
                    {/*                                <span>Design</span>*/}
                    {/*                                <h2>SOFA</h2>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}

                    {/*            <div className="portfolio_btn_wrap">*/}
                    {/*                <button type="button" className="portfolio_btn">Load More</button>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*        /!*Tab 2*!/*/}
                    {/*        <div className="tab_content" id="tab2">*/}
                    {/*            <div className="row d-flex justify-content-center">*/}
                    {/*                <div className="col-lg-4 col-md-6">*/}
                    {/*                    <div className="portfolio_item">*/}
                    {/*                        <img src="./assets/images/portfolio/portfolio_img_1.png" alt=""/>*/}
                    {/*                        <div className="portfolio_item_overlay">*/}
                    {/*                            <div className="portfolio_info">*/}
                    {/*                                <span>Design</span>*/}
                    {/*                                <h2>SOFA</h2>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default Portfolio;