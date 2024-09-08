import React from 'react';
import AboutImage from "../../assets/images/about/about_img.png";

const AboutImageView = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="about_img_wrapper">
                            <div className="about_img">
                                <img src={AboutImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutImageView;