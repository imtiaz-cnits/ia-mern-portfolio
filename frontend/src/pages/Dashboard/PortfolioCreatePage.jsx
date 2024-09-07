import React from "react";
import PortfolioForm from "../../components/Dashboard/PortfolioForm";
import DashboardLayout from "../../components/MasterLayout/DashboardLayout";

const PortfolioCreatePage = () => {
  return (
    <DashboardLayout>
      <PortfolioForm />
    </DashboardLayout>
  );
};

export default PortfolioCreatePage;
