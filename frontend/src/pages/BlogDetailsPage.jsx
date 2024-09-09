import React, {useEffect} from 'react';
import MasterLayout from "../components/MasterLayout/MasterLayout.jsx";
import BlogStore from "../store/BlogStore.js";
import {useParams} from "react-router-dom";
import BlogDetails from "../components/Blog/BlogDetails.jsx";
import BlogRelated from "../components/Blog/BlogRelated.jsx";
import ProjectHelp from "../components/Feature/ProjectHelp.jsx";

const BlogDetailsPage = () => {
    const {blogDetailsRequest, blogListRequest} = BlogStore();
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            await blogDetailsRequest(id);
            await blogListRequest();
        })()
    }, [id]);

    return (
        <MasterLayout>
            <BlogDetails/>
            <BlogRelated/>
            <ProjectHelp/>
        </MasterLayout>
    );
};

export default BlogDetailsPage;