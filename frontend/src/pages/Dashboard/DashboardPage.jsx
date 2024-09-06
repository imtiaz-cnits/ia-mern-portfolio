import Logo from "../../assets/images/logo.svg";
import DashboardLayout from "../../components/MasterLayout/DashboardLayout";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="" className="w-100" />
        <h1 className="text-gray-50 mt-3">Dashboard</h1>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
