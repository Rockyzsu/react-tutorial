// 模态框的使用
import { Form,Button,Modal } from "react-bootstrap";
import { useState } from "react";

const PostForm = () => {
  return (
    <Form id="postForm">
      <Form.Group controlId="title">
        <Form.Label>标题</Form.Label>
        <Form.Control type="text" placeholder="请输入标题" />
      </Form.Group>

      <Form.Group controlId="content">
        <Form.Label>内容</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>


    </Form>
  );
};


const PostButton = () => {
  const [show,setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  }
  const closeModal = () => {
    setShow(false);
  }

  const postContentFunc = async(body) => {
    try{

      const res = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/threads`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(body)
      })

      const result =await res.json();
      console.log(result);
      if(res.ok){
        alert('发布成功');
      }else{
        alert('发布失败');
      }

    }catch(e){
      console.log(e);
      alert('发布失败');
    }
  }

  const handlePost = () => {
    console.log('post data')
    const {username,token } = JSON.parse(localStorage.getItem('token'));
    const form = document.getElementById('postForm');
    const title = form.title.value;
    const content = form.content.value;
    console.log(title,content);
    const body ={username,token,title,content}
    postContentFunc(body);
    setShow(false);

  }

  return (
    <div>
      <Button variant="primary" onClick={(e)=>{showModal()}} size='sm'>
      发布新帖
      </Button>
       
      <Modal show={show} onHide={()=>{closeModal()}}>

      <Modal.Header closeButton>
        <Modal.Title>发布新帖</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <PostForm />
        </Modal.Body>
        
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>{closeModal()}}>关闭</Button>
        <Button variant="primary" onClick={()=>{handlePost()}}>提交</Button>
        </Modal.Footer>

      </Modal>
    </div>
  )

}

export default PostButton;