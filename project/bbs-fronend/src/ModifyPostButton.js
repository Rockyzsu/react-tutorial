// 模态框的使用
import { Form, Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";



const ModifyPostForm = (prop) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const loadDefaultPost = async (tid) => {
    console.log('loadDefaultPost');
    console.log(`${process.env.REACT_APP_BACKEND_HOST}`);
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/threads/${tid}`, {
        method: "GET",
      });
      const result = await res.json();
      console.log('result',result); 
      if(res.ok){
        setTitle(result.data.thread.title);
        setContent(result.data.thread.content);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { tid } = prop;
  console.log('tid',tid);
  useEffect(() => {
    loadDefaultPost(tid);
  }, []);

  return (
    <Form id="modifypostForm">
      <Form.Group controlId="title">
        <Form.Label>标题</Form.Label>
        <Form.Control type="text" defaultValue={title} />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label>内容</Form.Label>
        <Form.Control as="textarea" rows="3" defaultValue={content} />
      </Form.Group>
    </Form>
  );
};

const ModifyPostButton = (prop) => {
  const {tid}=prop;
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };

  const postContentFunc = async (body) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/threads/${tid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();
      console.log(result);
      if (res.ok) {
        alert("更新成功");
      } else {
        alert("更新失败");
      }
    } catch (e) {
      console.log(e);
      alert("发布失败");
    }
  };

  const handleModifyPost = () => {
    console.log("post data");
    const { username, token } = JSON.parse(localStorage.getItem("token"));
    const form = document.getElementById("modifypostForm");
    const title = form.title.value;
    const content = form.content.value;
    console.log(title, content);
    const body = { username, token, title, content };
    postContentFunc(body);
    setShow(false);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={(e) => {
          showModal();
        }}
        size="sm"
      >
        修改帖子
      </Button>

      <Modal
        show={show}
        onHide={() => {
          closeModal();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>修改帖子</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ModifyPostForm tid={tid}/>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              closeModal();
            }}
          >
            关闭
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleModifyPost();
            }}
          >
            提交
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModifyPostButton;
