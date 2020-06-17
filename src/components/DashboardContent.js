import React from "react";
import { Layout } from "antd";

import QueRoutes from "../routes/QueRoutes/index";
const DashboardContent = () => {
  const { Content } = Layout;
  return (
    <Content>
      <QueRoutes />
    </Content>
  );
};

export default DashboardContent;
