import React from 'react';
import BlogImg1 from "../../assets/images/blog_img_1.png";
import BlogImg2 from "../../assets/images/blog_img_2.png";
import BlogImg3 from "../../assets/images/blog_img_3.png";

const HomeBlog = () => {
    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog_head">
                                <div className="blog_head_title">
                                    <h4>Our Blog</h4>
                                    <h1>Latest Blog
                                        Articles</h1>
                                </div>
                                <div className="blog_btn_wrap">
                                    <button type="button" className="blog_btn">Discover All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog_wrapper">
                        <div className="row d-flex justify-content-between">
                            <div className="col-md-8">
                                <div className="blog_item blog_single_item">
                                    <div className="blog_img">
                                        <img src={BlogImg1} alt=""/>
                                    </div>
                                    <div className="blog_info">
                                        <h4>Stories</h4>
                                        <h2>Agency is a business you hire to outsource</h2>
                                        <p>5 Nov, 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="blog_item">
                                    <div className="blog_img">
                                        <img src={BlogImg2} alt=""/>
                                    </div>
                                    <div className="blog_info">
                                        <h4>Design</h4>
                                        <h2>Outsource your digital marketing efforts</h2>
                                        <p>29 Oct, 2024</p>
                                    </div>
                                </div>
                                <div className="blog_item">
                                    <div className="blog_img">
                                        <img src={BlogImg3} alt=""/>
                                    </div>
                                    <div className="blog_info">
                                        <h4>Design</h4>
                                        <h2>Outsource your digital marketing efforts</h2>
                                        <p>29 Oct, 2024</p>
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

export default HomeBlog;