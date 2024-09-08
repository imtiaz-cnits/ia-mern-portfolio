import React from 'react';

const ContactMe = () => {
    return (
        <>
            <section id="contact">
                <div className="contact_map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.684108199276!2d89.23508257479982!3d24.006929578880662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b5b4a35c9e7%3A0xcb692fab6b815d87!2sCodeNext%20IT%20Solution!5e0!3m2!1sen!2sbd!4v1724738480456!5m2!1sen!2sbd"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="contact_wrapper">
                    <div className="container">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-lg-5 col-md-8">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactMe;