import React from 'react';
import BlogStore from "../../store/BlogStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {Link} from "react-router-dom";
import {formatDate} from "../../utility/date.js";

const Blog = () => {
    const {blogList} = BlogStore();
    const AllBlog = blogList.slice(2);

    if(!AllBlog) {
        return (
            <PortfolioSkeleton/>
        );
    }
    return (
        <>
            <div className="all_blogs">
                <div className="container">
                    <div className="all_blog_wrapper">
                        <div className="row">
                            {
                                AllBlog.map((item, i) => {
                                    return (
                                        <div key={i} className="col-lg-4 col-md-6">
                                            <div className="blog_item">
                                                <Link to={`/blog-details/${item["_id"]}`}>
                                                    <div className="blog_img">
                                                        <img src={item["img"]} alt=""/>
                                                    </div>
                                                    <div className="blog_info">
                                                        <h4>{item["blog_category"]["category_name"]}</h4>
                                                        <h2>{item["title"]}</h2>
                                                        <p>{formatDate(item["createdAt"])}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                            {AllBlog.length > 6 && (
                                <div className="col-12">
                                    <div className="blog_btn_wrap">
                                        <button type="button" className="blog_btn">Load More</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;