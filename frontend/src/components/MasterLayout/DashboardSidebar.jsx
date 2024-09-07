import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

const DashboardSidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-box">
          <Link to="/dashboard" className="logo">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="sidebar-item">
          <ul>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/dashboard-client">Client</Link>
            </li>
            <li>
              <Link to="/dashboard-portfolio-category">Portfolio Category</Link>
            </li>
            <li>
              <Link to="/dashboard-portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/dashboard-blog-category">Blog Category</Link>
            </li>
            <li>
              <Link to="/dashboard-blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
