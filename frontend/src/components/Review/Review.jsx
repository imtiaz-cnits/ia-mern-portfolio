import React from 'react';
import Avatar1 from "../../assets/images/testimonial_avatar_1.png";
import Avatar2 from "../../assets/images/testimonial_avatar_2.png";
import Avatar3 from "../../assets/images/testimonial_avatar_3.png";

const Review = () => {
    return (
        <>
            <section id="testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="testimonial_head">
                                <h4>Testimonials</h4>
                                <h1>What My
                                    Clients Saying</h1>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial_wrapper">
                        <div className="testimonial_item">
                            <div className="testimonial_ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <p className="testimonial_text">
                                Outsource your digital marketing efforts, instead of handling in-house. They can provide
                                your
                                business with a variety.
                            </p>

                            <div className="testimonial_user">
                                <div className="user_avatar">
                                    <img src={Avatar1} alt=""/>
                                </div>
                                <div className="user_info">
                                    <h4>Graham Griffiths</h4>
                                    <p>Twitter</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial_item">
                            <div className="testimonial_ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <p className="testimonial_text">
                                A digital agency is a business you hire to outsource your digital marketing efforts,
                                instead of
                                handling in-house. They can provide your business with a variety of digital solutions.
                            </p>

                            <div className="testimonial_user">
                                <div className="user_avatar">
                                    <img src={Avatar2} alt=""/>
                                </div>
                                <div className="user_info">
                                    <h4>Graham Griffiths</h4>
                                    <p>Twitter</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial_item">
                            <div className="testimonial_ratings">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>

                            <p className="testimonial_text">
                                Outsource your digital marketing efforts, instead of handling in-house. They can provide
                                your
                                business with a variety.
                            </p>

                            <div className="testimonial_user">
                                <div className="user_avatar">
                                    <img src={Avatar3} alt=""/>
                                </div>
                                <div className="user_info">
                                    <h4>Graham Griffiths</h4>
                                    <p>Twitter</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial_btn_wrap">
                        <button type="button" className="testimonial_btn">See All</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;