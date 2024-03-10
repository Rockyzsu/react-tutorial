// 模态框的使用
import { Form } from "react-bootstrap";

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

}

export default PostButton;