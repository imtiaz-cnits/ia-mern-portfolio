import React from 'react';
import BlogStore from "../../store/BlogStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {useNavigate} from "react-router-dom";
import {formatDate} from "../../utility/date.js";
import QuoteIcon from "../../assets/images/icons/blog_quote_icon.svg";

const BlogDetails = () => {
    const {blogDetails} = BlogStore();

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // equivalent to history.goBack()
    };

    if (!blogDetails) {
        return (
            <PortfolioSkeleton/>
        )
    }
    return (
        <>
            <section id="blog_details">
                <div className="container">
                    <div className="blog_details_wrapper">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-sm-10">
                                <div className="blog_details_content">
                                    <button onClick={handleBack} className="back_btn">
                                        <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M5.03021 0L6.33508 1.28545L3.50442 4.09273H15V5.90727H3.50442L6.33508 8.71455L5.03021 10L0 5L5.03021 0Z"
                                                  fill="white"/>
                                        </svg>
                                        <span>Back to blog</span>
                                    </button>
                                    <h1 className="blog_title">{blogDetails[0]["title"]}</h1>
                                    <div className="blog_create_info">
                                        <div className="blog_user_info">
                                            <p>In <span>{blogDetails[0]["blog_category"]["category_name"]}</span> by <span>{blogDetails[0]["user"]["name"]}</span></p>
                                        </div>
                                        <div className="blog_date">
                                            <p>Date <span>{formatDate(blogDetails[0]["createdAt"])}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="blog_single_img">
                                    <img src={blogDetails[0]["img"]} alt=""/>
                                </div>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 col-sm-10">
                                <div className="blog_details">
                                    <h4>Agency provides a full service range including technical skills, design,
                                        business
                                        understanding.</h4>
                                    <p>{blogDetails[0]["des"]}</p>
                                    <h2>Promote your product</h2>
                                    <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the
                                        long
                                        run, and work as an extension of the merchant's team.</p>

                                    <ul>
                                        <li>Digital marketing</li>
                                        <li>Efforts instead</li>
                                        <li>Handling in-house</li>
                                    </ul>

                                    <p>A digital agency is a business you hire to outsource your digital marketing
                                        efforts,
                                        instead of handling in-house. They can provide your business with a variety of
                                        digital
                                        solutions to promote your product or service online and help you.</p>

                                    <h2>Service online and help</h2>

                                    <p>Put themselves in the merchant's shoes. It is meant to partner on the long run,
                                        and work
                                        as an extension of the merchant's team.</p>

                                    <ol>
                                        <li>Marketing efforts</li>
                                        <li>Marketing efforts</li>
                                        <li>Marketing efforts</li>
                                    </ol>

                                    <p>Agency is a business you hire to outsource your digital marketing efforts,
                                        instead of
                                        handling in-house. They can provide your business with a variety of digital
                                        solutions to
                                        promote your product or service online and help you.</p>

                                    <div className="blog_detail_highlight">
                                        <div className="blog_shape">
                                            <img src={QuoteIcon} alt=""/>
                                        </div>
                                        <p>Provide your business with a variety of digital solutions to promote your
                                            product or
                                            service online and help you.</p>
                                    </div>

                                    <p>Outsource your digital marketing efforts, instead of handling in-house. They can
                                        provide
                                        your business with a variety of digital solutions to promote your product or
                                        service
                                        online and help you.</p>
                                </div>

                                <div className="blog_creator_info">
                                    <div className="blog_creator">
                                        <div className="blog_creator_avatar">
                                            <img src={blogDetails[0]["user"]["img"]} alt=""/>
                                        </div>
                                        <div className="blog_creator_name">
                                            <h4>{blogDetails[0]["user"]["name"]}</h4>
                                            <p>Editor</p>
                                        </div>
                                    </div>

                                    <div className="blog_creator_social">
                                        <a href="#" className="blog_creator_social_item">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="blog_creator_social_item">
                                            <i className="fa-brands fa-x-twitter"></i>
                                        </a>
                                        <a href="#" className="blog_creator_social_item">
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

export default BlogDetails;