import "../../assets/css/dashboard.css";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = (props) => {
  return (
    <>
      <section id="dashboard">
        <DashboardSidebar />
        <div className="main-content">
          <DashboardNavbar />
          <div className="main_content_wrapper">{props.children}</div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
