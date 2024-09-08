import React from 'react';

const NewsLetter = () => {
    return (
        <>
            <div className="newsletter">
                <div className="container">
                    <div className="newsletter_wrapper">
                        <h1>Newsletter</h1>

                        <div className="newsletter_form">
                            <input type="email" placeholder="Your email" className="newsletter_input"/>
                            <button type="submit" className="newsletter_btn">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;