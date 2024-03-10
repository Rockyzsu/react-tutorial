import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

const SettingForm = () => {
  const [settings, setSettings] = useState({});

  const loadSetting = async () => {
    try {
        const store = await localStorage.getItem('token');
        const {username,token} = JSON.parse(store);
        const res = await fetch(`http://127.0.0.1:7000/api/users/${username}`, {
            method: "GET",
        })
        console.log(res);
        const result = await res.json();
        console.log(result);
        if(res.ok){
            setSettings(result.data);
        }else{
            alert(result.data.message);
        }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    loadSetting();
  }, []);

  const setting = async (body) => {
    try{

        const {username,token} = JSON.parse(localStorage.getItem('token'));
        const {description} = body;
        const data = new FormData();
        await data.append('description',description);
        await data.append('username',username);
        await data.append('token',token);
        const file = document.forms.settingForm.uploader.files[0];
        console.log(file);
        await data.append('avatar',document.querySelector('#uploader').files[0]);
        console.log(data);
        const res = await fetch(`http://127.0.0.1:7000/api/users`, {
            method: "PATCH",
            body: data,
        })
        console.log(res.data);
        const result = await res.json()
        if(res.ok){
            alert(result.message);
            loadSetting();
        }else{
            alert(result.message);
        }
    }catch(error){
        console.log(error);
    }

  };

  const handleSetting = async (e) => {
    console.log("setting");
    e.preventDefault();
    const form = document.forms.settingForm;
    const description = form.description.value;
    const body = { description };
    setting(body);
  };
  return (
    <Form id="settingForm">
      <Form.Group controlId="description">
        <Form.Label>个人简介</Form.Label>
        <Form.Control
          type="text"
          placeholder="请输入个人简介"
          defaultValue={settings.description}
        />
      </Form.Group>

      <Form.Group controlId="uploader">
        <Form.Label>头像</Form.Label>
        <img
          src={
            settings.avatar ? `/upload/${settings.avatar}` : "/img/avatar.png"
          }
          alt="头像"
          className="rounded img-thumbnail"
        />
        <Form.Control type="file" placeholder="请上传个人头像" />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        onClick={(e) => {
          handleSetting(e);
        }}
      >
        修改
      </Button>
    </Form>
  );
};

export default SettingForm;
