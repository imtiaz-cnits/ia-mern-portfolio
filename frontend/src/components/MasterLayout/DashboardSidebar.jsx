import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const DashboardSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-box">
          <a href="#" className="logo">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="sidebar-item">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/portfolio-category">Portfolio Category</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/blog-category">Blog Category</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
