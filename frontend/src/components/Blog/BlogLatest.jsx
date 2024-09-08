import React from 'react';

const BlogLatest = () => {
    return (
        <>
            <div className="latest_blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="blog_item latest_blog">
                                <div className="blog_img">
                                    <img src="./assets/images/blog/blog_img_1.png" alt=""/>
                                </div>
                                <div className="blog_info">
                                    <h4>Design</h4>
                                    <h2>Performance marketing agencies specialize</h2>
                                    <p>29 Oct, 2024</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="blog_item latest_blog">
                                <div className="blog_img">
                                    <img src="./assets/images/blog/blog_img_2.png" alt=""/>
                                </div>
                                <div className="blog_info">
                                    <h4>Design</h4>
                                    <h2>Outsource your digital marketing efforts</h2>
                                    <p>29 Oct, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogLatest;