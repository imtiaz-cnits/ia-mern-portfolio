import React from 'react';
import BlogStore from "../../store/BlogStore.js";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {Link} from "react-router-dom";
import {formatDate} from "../../utility/date.js";

const BlogRelated = () => {
    const {blogList} = BlogStore();

    const RelatedBlog = blogList.slice(0, 3);

    if (!RelatedBlog) {
        return (
            <PortfolioSkeleton/>
        );
    }
    return (
        <>
            <section id="related_blog">
                <div className="container">
                    <div className="related_blog_wrapper">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="related_blog_head">
                                    <h2>Related Articles</h2>
                                </div>
                            </div>

                            {
                                RelatedBlog.map((item, i) => {
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogRelated;