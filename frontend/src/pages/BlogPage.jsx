import React from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import BlogHero from "../components/Blog/BlogHero.jsx";
import BlogLatest from "../components/Blog/BlogLatest.jsx";
import Blog from "../components/Blog/Blog.jsx";
import NewsLetter from "../components/Feature/NewsLetter.jsx";
import ProjectHelp from "../components/Feature/ProjectHelp.jsx";

const BlogPage = () => {
    return (
        <MasterLayout>
            <BlogHero/>
            <BlogLatest/>
            <Blog/>
            <NewsLetter/>
            <ProjectHelp/>
        </MasterLayout>
    );
};

export default BlogPage;