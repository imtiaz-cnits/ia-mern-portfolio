import React from 'react';
import ProjectHelpImg from "../../assets/images/portfolio/project_help_img.png";
import {Link} from "react-router-dom";

const ProjectHelp = () => {
    return (
        <>
            <section id="project_help">
                <div className="container">
                    <div className="project_help_wrapper">
                        <div className="row d-flex align-items-center justify-content-between">
                            <div className="col-md-6">
                                <div className="project_help_content">
                                    <h1>Help To Build
                                        Your Dream
                                        Project</h1>
                                    <p>A digital agency is a business you hire to outsource your digital marketing
                                        efforts,
                                        instead of handling in-house.</p>
                                    <Link to="/contact" className="project_help_btn">Contact Now</Link>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="project_help_img">
                                    <img src={ProjectHelpImg} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectHelp;