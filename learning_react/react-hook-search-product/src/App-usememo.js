// 不渲染组件

import { useEffect, useState, useMemo } from "react";

const UserInfo = ({ user }) => {
  console.log("render userinfo");
  console.log(user);

  const filterSex = useMemo(() => {
    console.log('call');
    return user.sex == 1 ? "男" : "女";
  }, [user.sex]);

  return (
    <div className="app-warp">
      <div>基本信息:</div>
      <div>{user.username}</div>
      <div>{user.age}</div>
      <div>{user.salary}</div>
      <div>{filterSex}</div>
      <img src={user.avatar} alt="img" />
    </div>
  );
};

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
      sex: 1,
      age: 18,
      salary: 10000,
      avatar:
        "https://b.bdstatic.com/searchbox/icms/searchbox/img/cheng_girl.png",
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
