import React from 'react';
import AboutImg from "../../assets/images/about_img.png";

const HomeAbout = () => {
    return (
        <>
            <section id="home_about">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-md-6">
                            <div className="home_about_img">
                                <img src={AboutImg} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="home_about_content">
                                <h4>Gabriel Pires</h4>
                                <h1>Professional
                                    Web Designer</h1>
                                <h3>Provides a full service range</h3>
                                <p>Ability to put themselves in the merchant's shoes. It is meant to partner on the long
                                    run,
                                    and work as an extension of the merchant's team.</p>
                                <button type="button" className="home_about_btn">About Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeAbout;