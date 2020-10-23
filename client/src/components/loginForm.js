import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import "./stylesheets/loginForm.css";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row type="flex" justify="space-around" align="middle">
      <Col span={8}>
        <h1>Login Form</h1>
        <div id="login-form">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            Email
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter your Email!',
                  type: 'email'
                },
              ]}
            >
              <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>
            
            Password
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <a className="login-form-forgot" href="/">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                LOGIN
              </Button>
              <Button type="secondary" className="register-form-button">
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginForm;