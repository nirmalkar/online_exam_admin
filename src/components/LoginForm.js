import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";

import { useInputState } from "../hooks/useInputState";

const LoginFrom = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const history = useHistory();

  const onFinish = (e) => {
    history.push("/home");
    resetEmail();
    resetPassword();
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input placeholder="email" onChange={setEmail} value={email} />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
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

          <a className="login-form-forgot" href="/forgot-password">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginFrom;
