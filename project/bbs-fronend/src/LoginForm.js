import React from "react";
import { Form, Button } from "react-bootstrap";

const login = async (body) => {
  // 注册
  try {
    const res = await fetch("http://localhost:7000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });


    const result = await res.json();
    console.log(result);
    if(res.ok){
      const data = {username:result.data.username,  token:result.data.token};
      console.log(JSON.stringify(data));
      const saveResult = await localStorage.setItem('token', JSON.stringify(result.data));
      console.log(saveResult);
      alert(result.message);

    }else{
      alert(result.message);
    }
  } catch (error) {
    console.log(error);
    alert("登录失败");
  }
};

const handlelogin = (e) => {
  e.preventDefault();
  console.log("login");

  const form = document.forms.loginForm; // document.getElementById("loginForm");
  const username = form.lusername.value;
  const password = form.lpassword.value;
  console.log(username, password);
  if (!password?.length) {
    alert("密码不能为空");
    return;
  }

  const body = { username, password};
  login(body);

};

const LoginForm = () => {
  return (
    <Form id="loginForm">
      <Form.Group controlId="lusername">
        <Form.Label>用户名</Form.Label>
        <Form.Control type="text" placeholder="请输入用户名" />
      </Form.Group>

      <Form.Group controlId="lpassword">
        <Form.Label>密码</Form.Label>
        <Form.Control type="password" placeholder="请输入密码" />
      </Form.Group>


      <Button
        variant="primary"
        type="submit"
        onClick={(e) => handlelogin(e)}
      >
        登录
      </Button>
    </Form>
  );
};

export default LoginForm;
