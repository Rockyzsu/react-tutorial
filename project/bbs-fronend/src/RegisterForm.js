import React from "react";
import { Form, Button } from "react-bootstrap";

const register = async (body) => {
  // 注册
  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });


    const result = await res.json();
    if(result.status){
      alert(result.message);
    }else{
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("注册失败");
  }
};

const handleRegister = (e) => {
  e.preventDefault();
  console.log("register");

  const form = document.forms.registerForm; // document.getElementById("registerForm");
  const username = form.username.value;
  const password = form.password.value;
  const confirmpass = form.passwordconfirm.value;
  console.log(username, password, confirmpass);
  if (password !== confirmpass) {
    alert("两次输入的密码不一致");
    return;
  }

  const body = { username, password, confirmpass};
  register(body);
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
