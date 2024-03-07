import React from "react";
import { Form, Button } from "react-bootstrap";

const handleRegister = (e) => {
  e.preventDefault();
  console.log("register");

  const form = document.forms.registerForm; // document.getElementById("registerForm");
  const username = form.username.value;
  const password = form.password.value;
  const passwordconfirm = form.passwordconfirm.value;
  console.log(username, password, passwordconfirm);
  if(password !== passwordconfirm) {
    alert("两次输入的密码不一致");
    return;
  }
  

};

const RegisterForm = () => {
  return (
    <Form id="registerForm">
      <Form.Group controlId="username">
        <Form.Label>用户名</Form.Label>
        <Form.Control type="text" placeholder="请输入用户名" />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>密码</Form.Label>
        <Form.Control type="password" placeholder="请输入密码" />
      </Form.Group>

      <Form.Group controlId="passwordconfirm">
        <Form.Label>确认密码</Form.Label>
        <Form.Control type="password" placeholder="请再次输入密码" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={(e) => handleRegister(e)}
      >
        注册
      </Button>
    </Form>
  );
};

export default RegisterForm;
