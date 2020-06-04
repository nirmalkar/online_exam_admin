import React from "react";
import { Card, Layout } from "antd";

import LoginForm from "../components/LoginForm";

const LandingPage = () => {
  return (
    <Layout className="h-100">
      <Card className="card-style">
        <LoginForm />
      </Card>
    </Layout>
  );
};
export default LandingPage;
