// 不渲染组件

import { useEffect, useState, memo } from "react";

const UserInfo = memo(({ user }) => {
  console.log("render userinfo");
  console.log(user);
  return (
    <div className="app-warp">
      <div>基本信息:</div>
      <div>{user.username}</div>
      <div>{user.age}</div>
      <div>{user.salary}</div>
    </div>
  );
});

function App() {
  const [user, setUser] = useState({});
  const [articles, setArticle] = useState([]);

  const fetchArticle = () => {
    let mockData = new Array(10).fill({ title: "React 入门到放弃" });
    setArticle(mockData);
  };

  useEffect(() => {
    const user = {
      username: "Austin",
      age: 18,
      salary: 10000,
    };
    setUser(user);
  }, []);

  return (
    <div className="App">
      <UserInfo user={user} />
      <button onClick={fetchArticle}>Fetch article</button>
      <div className="article-warp">
        {articles.map((item, index) => {
          return <p key={index}>{item.title}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
