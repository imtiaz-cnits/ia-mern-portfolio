import React from 'react';
import ContactIcon1 from "../../assets/images/icons/contact_icon_1.svg";
import ContactIcon2 from "../../assets/images/icons/contact_icon_2.svg";
import ContactIcon3 from "../../assets/images/icons/contact_icon_3.svg";

const HomeContact = () => {
    return (
        <div>
            <section id="home_contact">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-md-6">
                            <div className="contact_from_wrapper">
                                <form action="#" className="contact_form">
                                    <h4>Get In Touch</h4>
                                    <div className="contact_input">
                                        <input type="text" placeholder="Your email"/>
                                    </div>
                                    <div className="contact_input">
                                        <div className="contact_select">
                                            <select>
                                                <option value="subject">Subject</option>
                                                <option value="option1">Option 1</option>
                                                <option value="option2">Option 2</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="contact_input">
                                        <textarea name="" id="" placeholder="Message"></textarea>
                                    </div>
                                    <div className="contact_btn_wrap">
                                        <button type="submit" className="submit_btn">Submit Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-5">
                            <div className="contact_content">
                                <h4>Contact</h4>
                                <h1>Contact Me</h1>
                                <p>A digital agency is a business you hire to outsource your digital marketing efforts,
                                    instead
                                    of handling in-house.</p>

                                <ul className="contact_items">
                                    <li className="contact_item">
                                        <div className="contact_link">
                                    <span className="contact_icon"><img src={ContactIcon1}
                                                                        alt=""/></span>
                                            2247 Lunetta Street, TX 76301
                                        </div>
                                    </li>
                                    <li className="contact_item">
                                        <a href="#" className="contact_link">
                                    <span className="contact_icon"><img src={ContactIcon2}
                                                                        alt=""/></span>
                                            +1 (234) 567-89-00
                                        </a>
                                    </li>
                                    <li className="contact_item">
                                        <a href="#" className="contact_link">
                                    <span className="contact_icon"><img src={ContactIcon3}
                                                                        alt=""/></span>
                                            info@agency.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeContact;