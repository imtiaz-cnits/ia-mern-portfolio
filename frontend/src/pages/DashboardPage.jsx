import "../assets/css/dashboard.css";
import Logo from "../assets/images/logo.svg";

const DashboardPage = () => {
    return (
        <>
            <section id="dashboard">
                <div className="sidebar">
                    <div className="logo-box">
                        <a href="#" className="logo">
                            <img src={Logo} alt="Logo" />
                        </a>
                    </div>
                    <div className="sidebar-item">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Faq</a></li>
                        </ul>
                    </div>
                </div>

                <div className="main-content">
                    <div className="dashboard_navbar">
                        <div className="navbar-title">
                            <h1>Dashboard</h1>
                        </div>
                        <div className="profile">
                            <a href="#" className="image">
                                <span>IMG</span>
                            </a>
                        </div>
                    </div>
                    <div className="main-form">
                        <div className="contact-form">
                            <h1>Title</h1>
                            <form>
                                <div className="field">
                                    <label className="label">Name:</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Your Name"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="select-wrapper">
                                        <label className="lavel">Select:</label>
                                        <select className="select">
                                            <option value="value1">Select</option>
                                            <option value="value1">Mango</option>
                                            <option value="value2">Banana</option>
                                            <option value="value3">Cherries</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message:</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Your Message"></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="input input--file">
                                        <span className="input__text">Attachment:</span>
                                        <div className="file">
                                            <div className="upload">
                                                <div className="upload-img">
                                                    <span>file</span>
                                                </div>
                                            </div>
                                            <div className="file-item">
                                                <input type="file" className="input__field"
                                                       accept="image/*,.doc,.docx,.pdf"
                                                       required/>
                                                <span className="input__support">
                                            <span className="input__helper"></span>
                                        </span>
                                            </div>
                                        </div>
                                    </label>
                                </div>


                                <div className="field">
                                    <div className="control">
                                        <button className="button is-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default DashboardPage;