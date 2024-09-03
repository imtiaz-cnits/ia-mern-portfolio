import React from 'react';
import AppLogo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="footer_logo">
                                <img src={AppLogo} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="footer_content">
                                <h4>Menu</h4>

                                <ul className="footer_items">
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">About</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Services</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Blog</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-6">
                            <div className="footer_content">
                                <h4>Service</h4>

                                <ul className="footer_items">
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Design</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Development</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">Marketing</a>
                                    </li>
                                    <li className="footer_item">
                                        <a href="#" className="footer_link">See More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12">
                            <div className="social_items">
                                <a href="#" className="social_item">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social_item">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                                <a href="#" className="social_item">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="copyright">
                        <div className="copyright_wrapper">
                            <p className="copyright_text">Copyright &copy; 2022 Laaqiq. All Rights Reserved.</p>
                            <ul className="copyright_items">
                                <li className="copyright_item">
                                    <a href="#" className="copyright_link">Terms of Use</a>
                                </li>
                                <li className="copyright_item">
                                    <a href="#" className="copyright_link">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;