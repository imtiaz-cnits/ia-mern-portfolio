import React from 'react';
import CheckIcon from "../../assets/images/icons/check.svg";
import FeatureImg from "../../assets/images/features_img.png"

const Feature = () => {
    return (
        <>
            <section id="features">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-md-5">
                            <div className="features_content">
                                <h4>Features</h4>
                                <h1>Give Your Site
                                    A New Look</h1>
                                <h3>Service range including technical skills, design, business understanding.</h3>

                                <ul className="features_items">
                                    <li className="features_item">
                                        <img src={CheckIcon} alt=""/>
                                        <span>Range including technical skills</span>
                                    </li>
                                    <li className="features_item">
                                        <img src={CheckIcon} alt=""/>
                                        <span>Business understanding</span>
                                    </li>
                                    <li className="features_item">
                                        <img src={CheckIcon} alt=""/>
                                        <span>Partner on the long run</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="features_img">
                                <img src={FeatureImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Feature;