import React from "react";
import ClientForm from "../../components/Dashboard/ClientForm";
import DashboardLayout from "../../components/MasterLayout/DashboardLayout";

const ClientPage = () => {
  return (
    <DashboardLayout>
      <ClientForm />
    </DashboardLayout>
  );
};

export default ClientPage;
