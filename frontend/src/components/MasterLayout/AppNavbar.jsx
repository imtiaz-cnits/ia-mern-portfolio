import AppLogo from "../../assets/images/logo.svg";
import {Link} from "react-router-dom";

const AppNavbar = () => {
    const navToggleBtn = document.querySelector("#nav_toggle_btn");
    function menuShow() {
        document.querySelector(".nav_menu").classList.toggle("show");
        navToggleBtn.classList.toggle("open");
    }
    function menuClose() {
        document.querySelector(".nav_menu").classList.remove("show");
        navToggleBtn.classList.remove("open");
    }

// scroll to navbar fixed top
    let navbarScroll = () => {
        let navbar = document.getElementById("navbar");
        let pos = document.documentElement.scrollTop;
        if (pos > 120) {
            navbar.classList.add("navbar_active");
        } else {
            navbar.classList.remove("navbar_active");
        }
    };

    window.onscroll = navbarScroll;
    window.onload = navbarScroll;

    return (
        <>
            <header id="navbar">
                <div className="container">
                    <div className="navbar_wrapper">
                        <a href="#" className="logo">
                            <img src={AppLogo} alt=""/>
                        </a>

                        <nav className="nav_menu">
                            <ul className="nav_items">
                                <li className="nva_item"><Link to="/" className='nav_link'>Home</Link></li>
                                <li className="nva_item"><Link to="/about" className='nav_link'>About</Link></li>
                                <li className="nva_item"><Link to="/portfolio" className='nav_link'>Portfolio</Link></li>
                                <li className="nva_item"><Link to="/blog" className='nav_link'>Blog</Link></li>
                            </ul>
                        </nav>

                        <Link to="/contact" className="nav_btn">Contact</Link>

                        <button type="button" className="burger_icon" id="nav_toggle_btn" onClick={menuShow}
                                onBlur={menuClose}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default AppNavbar;