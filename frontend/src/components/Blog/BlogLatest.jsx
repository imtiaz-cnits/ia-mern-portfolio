import React from 'react';
import BlogStore from "../../store/BlogStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {Link} from "react-router-dom";
import {formatDate} from "../../utility/date.js";

const BlogLatest = () => {
    const {blogList} = BlogStore();
    const LatestBlog = blogList.slice(0, 2);

    if(!LatestBlog) {
        return (
            <PortfolioSkeleton/>
        );
    }
    return (
        <>
            <div className="latest_blog">
                <div className="container">
                    <div className="row">

                        {
                            LatestBlog.map((item, i) => {
                                return (
                                    <div key={i} className="col-md-6">
                                        <div className="blog_item latest_blog">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogLatest;