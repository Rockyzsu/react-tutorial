import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
const UserInfo = (props) => {
  const { username } = props;
  console.log(username);
  console.log("this is my name");
  const [userdetail, setUser] = useState({});
  const [threadsList, setThreads] = useState([]);
  const URL = `${process.env.REACT_APP_BACKEND_HOST}/api/users/${username}`;
  console.log("==================", URL);
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch(URL, {
          Method: "GET",
        });
        console.log(res.data);
        const result = await res.json();
        console.log("useinfo");
        console.log(result.data.threads);

        if (res.ok) {
          setUser(result.data);
          setThreads(result.data.threads);
        }
      } catch (e) {
        console.log("errrrr");
        console.log(e);
        alert(e.message);
      }
    };
    init();
  }, []);
  return (
    <div>
      <ProfileInfo user={userdetail} />
      <ThreadsInfo threads={threadsList} />
    </div>
  );
};

const ProfileInfo = (props) => {
  const { user } = props;
  console.log("avatar data : ", user.avatar);
  return (
    <Card>
      <Card.Header>个人信息</Card.Header>
      <Card.Img
        variant="top"
        src={user.avatar ? `${process.env.PUBLIC_URL}/upload/${user.avatar}` : `${process.env.PUBLIC_URL}/img/avatar.png`}
        className="rounded img-thumbnail"
      />
      <Card.Body>
        <Card.Title>用户名</Card.Title>
        <Card.Text>{user.username}</Card.Text>
        <Card.Title>个人描述</Card.Title>
        <Card.Text>{user.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const ThreadsInfo = (props) => {
  const { threads } = props;
  console.log(threads);
  //   threads 是一个数组
  const lines = threads.map((thread, ids) => (
    <ListGroup.Item key={ids} className="d-flex justify-content-between">
      <span>{thread.title}</span>
      <small className="text-muted">
        {new Date(thread.posttime).toLocaleDateString()}
      </small>
    </ListGroup.Item>
  ));

  return (
    <Card>
      <Card.Header>发帖信息</Card.Header>
      <ListGroup variant="flush">{lines}</ListGroup>
    </Card>
  );
};
export default UserInfo;
