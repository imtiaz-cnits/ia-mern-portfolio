import BlogStore from "../../store/BlogStore.js";
import {Link} from "react-router-dom";
import PortfolioSkeleton from "../../skeleton/PortfolioSkeleton.jsx";
import {formatDate} from "../../utility/date.js";

const HomeBlog = () => {
    const {blogList} = BlogStore();
    console.log(blogList);

    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="blog_head">
                                <div className="blog_head_title">
                                    <h4>Our Blog</h4>
                                    <h1>Latest Blog
                                        Articles</h1>
                                </div>
                                <div className="blog_btn_wrap">
                                    <button type="button" className="blog_btn">Discover All</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog_wrapper">
                        <div className="row d-flex justify-content-between">
                            {
                                blogList === null ? (<PortfolioSkeleton/>) : (
                                    <>
                                        {/*<div className="col-md-8">*/}
                                        {/*    <Link to={`/blog-details/${blogList[0]["_id"]}`}*/}
                                        {/*          className="blog_item blog_single_item">*/}
                                        {/*        <div className="blog_img">*/}
                                        {/*            <img src={blogList[0]["img"]} alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="blog_info">*/}
                                        {/*            <h4>{blogList[0]["blog_category"]["category_name"]}</h4>*/}
                                        {/*            <h2>{blogList[0]["title"]}</h2>*/}
                                        {/*            <p>{new Date(blogList[0]["createdAt"]).toLocaleDateString()}</p>*/}
                                        {/*        </div>*/}
                                        {/*    </Link>*/}
                                        {/*</div>*/}
                                        {/*<div className="col-md-3">*/}
                                        {/*    <Link to={`/blog-details/${blogList[1]["_id"]}`} className="blog_item">*/}
                                        {/*        <div className="blog_img">*/}
                                        {/*            <img src={blogList[1]["img"]} alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="blog_info">*/}
                                        {/*            <h4>{blogList[1]["blog_category"]["category_name"]}</h4>*/}
                                        {/*            <h2>{blogList[1]["title"]}</h2>*/}
                                        {/*            <p>{new Date(blogList[1]["createdAt"]).toLocaleDateString()}</p>*/}
                                        {/*        </div>*/}
                                        {/*    </Link>*/}
                                        {/*    <Link to={`/blog-details/${blogList[2]["_id"]}`} className="blog_item">*/}
                                        {/*        <div className="blog_img">*/}
                                        {/*            <img src={blogList[2]["img"]} alt=""/>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="blog_info">*/}
                                        {/*            <h4>{blogList[2]["blog_category"]["category_name"]}</h4>*/}
                                        {/*            <h2>{blogList[2]["title"]}</h2>*/}
                                        {/*            <p>{new Date(blogList[2]["createdAt"]).toLocaleDateString()}</p>*/}
                                        {/*        </div>*/}
                                        {/*    </Link>*/}
                                        {/*</div>*/}

                                        {blogList.length > 0 && (
                                            <div className="col-md-8">
                                                <Link to={`/blog-details/${blogList[0]["_id"]}`}>
                                                    <div className="blog_item blog_single_item">
                                                        <div className="blog_img">
                                                            <img src={blogList[0]["img"]} alt=""/>
                                                        </div>
                                                        <div className="blog_info">
                                                            <h4>{blogList[0]["blog_category"]["category_name"]}</h4>
                                                            <h2>{blogList[0]["title"]}</h2>
                                                            <p>{new Date(blogList[0]["createdAt"]).toLocaleDateString()}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}

                                        <div className="col-md-3">
                                            {blogList.slice(1).map((item, i) => (
                                                <Link to={`/blog-details/${item["_id"]}`} key={i}>
                                                    <div className="blog_item">
                                                        <div className="blog_img">
                                                            <img src={item["img"]} alt=""/>
                                                        </div>
                                                        <div className="blog_info">
                                                            <h4>{item["blog_category"]["category_name"]}</h4>
                                                            <h2>{item["title"]}</h2>
                                                            <p>{formatDate(item["createdAt"])}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeBlog;