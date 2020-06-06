import React from "react";
import { Card, Layout } from "antd";

import LoginForm from "../components/LoginForm";

const LandingPage = () => {
  return (
    <Layout className="h-100 c-w">
      <Card className="card-style is-raised" bordered={false}>
        <LoginForm />
      </Card>
    </Layout>
  );
};
export default LandingPage;
