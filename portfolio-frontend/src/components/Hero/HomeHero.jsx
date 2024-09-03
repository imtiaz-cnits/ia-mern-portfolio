import React from 'react';
import HeroImg from "../../assets/images/hero_img.png";

const HomeHero = () => {
    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="hero_content">
                                <h4>IMTIAZ AHMED</h4>
                                <h1>Simple Code, <br/>
                                    Clean Design</h1>
                                <p>Agency provides a full service range including technical skills, design, business
                                    understanding.</p>
                                <button type="button" className="hero_btn">See My Work</button>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="hero_img">
                                <img src={HeroImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHero;