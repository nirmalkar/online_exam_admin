import React from "react";
import { Form, Input, Button, Checkbox, Card, Layout } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useInputState } from "../hooks/useInputState";

const LandingPage = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const onSubmit = (e) => {
    e.preventDefault();
    resetEmail();
    resetPassword();
  };
  return (
    <Layout className="h-100">
      <Card className="card-style">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onSubmit={onSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              onChange={setEmail}
              value={email}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              onChange={setPassword}
              placeholder="Password"
              value={password}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};
export default LandingPage;
