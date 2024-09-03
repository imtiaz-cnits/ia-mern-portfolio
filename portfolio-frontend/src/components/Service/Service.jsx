import React from 'react';

const Service = () => {
    return (
        <>
            <section id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="service_head">
                                <h4>Service</h4>
                                <h1>How I Can Help
                                    You With</h1>
                            </div>
                        </div>
                    </div>

                    <div className="service_wrapper">
                        <div className="service_card">
                            <div className="service_card_title">
                                <div className="service_card_icon">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M16 0C16.3784 0 16.7244 0.213767 16.894 0.552318L17.618 2.00133H27C28.6569 2.00133 30 3.34541 30 5.00342V20.0139H2V5.00342C2 3.34541 3.34315 2.00133 5 2.00133H14.38L15.106 0.552318C15.2756 0.213767 15.6216 0 16 0ZM1 22.0153C0.447715 22.0153 0 22.4633 0 23.016C0 23.5687 0.447715 24.0167 1 24.0167H6.72L5.03 30.7794C4.91073 31.3098 5.23643 31.8384 5.76354 31.97C6.29065 32.1016 6.82633 31.788 6.97 31.2637L7.78 28.0195H24.22L25.03 31.2637C25.1737 31.788 25.7094 32.1016 26.2365 31.97C26.7636 31.8384 27.0893 31.3098 26.97 30.7794L25.28 24.0167H31C31.5523 24.0167 32 23.5687 32 23.016C32 22.4633 31.5523 22.0153 31 22.0153H1ZM8.28 26.0181L8.78 24.0167H23.22L23.72 26.0181H8.28Z"
                                              fill="white"/>
                                    </svg>
                                </div>
                                <h4>Design</h4>
                            </div>

                            <p>Agency is a business you hire to outsource your digital marketing efforts, instead of
                                handling
                                in-house.</p>

                            <button type="button" className="service_btn">
                        <span className="service_btn_icon">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z"
                                      fill="#EF6C57"/>
                            </svg>
                        </span> Learn More
                            </button>
                        </div>
                        <div className="service_card">
                            <div className="service_card_title">
                                <div className="service_card_icon">
                                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M13 0C11.3431 0 10 1.34315 10 3V4H3C1.34315 4 0 5.34315 0 7V9.768L15.228 13.828C15.7339 13.9627 16.2661 13.9627 16.772 13.828L32 9.768V7C32 5.34315 30.6569 4 29 4H22V3C22 1.34315 20.6569 0 19 0H13ZM13 2H19C19.5523 2 20 2.44772 20 3V4H12V3C12 2.44772 12.4477 2 13 2ZM3 26C1.34315 26 0 24.6569 0 23V11.7L15.742 15.894C15.911 15.9391 16.089 15.9391 16.258 15.894L32 11.7V23C32 24.6569 30.6569 26 29 26H3Z"
                                              fill="white"/>
                                    </svg>
                                </div>
                                <h4>Development</h4>
                            </div>

                            <p>Hire to outsource your digital marketing efforts, instead of handling in-house can
                                provide your
                                business.</p>

                            <button type="button" className="service_btn">
                        <span className="service_btn_icon">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 0H5V5H0V7H5V12H7V7H12V5H7V0Z"
                                      fill="#EF6C57"/>
                            </svg>
                        </span> Learn More
                            </button>
                        </div>
                    </div>

                    <p className="service_explore">Want more service? <a href="" className="service_explore_btn">Explore
                        Now</a></p>
                </div>
            </section>
        </>
    );
};

export default Service;