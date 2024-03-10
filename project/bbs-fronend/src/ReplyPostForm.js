import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
// prop是一个字段
const ReplyPostForm = (prop) => {
  const { tid } = prop;
//   cosnt[(ReplyPostForm, setReply)] = useState("");

  const addReplyContent = async (body) => {

    // const body = {username,token,tid,content}
    try {
        const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/comments/${tid}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
            });

        const result = await res.json();
        console.log(result);
        if(res.ok){
            alert(result.message);
        }else{
            alert(result.message);
        }
        document.getElementById("content").value ='';
    } catch (e) {
      console.log(e);
    }
  };

  const handleReplySubmit = async () => {
    const {username,token} = await JSON.parse(localStorage.getItem('token'));
    const content = document.getElementById("content").value;
    const body = {username,token,tid,content};
    addReplyContent(body);
  }
  return (
    <Form id="replyForm" className="p-3">
      <Form.Group controlId="content">
        <Form.Label>回复</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Button
        onClick={() => {
          handleReplySubmit();
        }}
      >
        提交
      </Button>
    </Form>
  );
};

export default ReplyPostForm;
