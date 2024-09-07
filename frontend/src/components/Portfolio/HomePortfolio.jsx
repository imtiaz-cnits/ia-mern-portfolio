import PortfolioStore from "../../store/PortfolioStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {Link} from "react-router-dom";

const HomePortfolio = () => {
    const {portfolioList} = PortfolioStore();
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

                        {
                            portfolioList === null ? (<PortfolioSkeleton/>) : (
                                portfolioList?.map((item,i) => {
                                    return (
                                        <Link to={`/portfolio-details/${item["_id"]}`} key={i} className="home_portfolio_item">
                                            <div className="home_portfolio_item_wrap">
                                                <img src={item["img1"]} alt=""/>
                                                <div className="home_portfolio_item_overlay">
                                                    <div className="home_portfolio_info">
                                                        <span>{item["sub_title"]}</span>
                                                        <h2>{item["title"]}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePortfolio;