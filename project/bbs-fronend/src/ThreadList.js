import React, { useState, useEffect } from "react";

function Thread({ title, author }) {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{author}</td>
      </tr>
    </>
  );
}



export default function ThreadList() {
  // const threadContent = [
  //     {'title': '标题1', 'author': '作者1'},
  //     {'title': '标题2', 'author': '作者2'},
  //     {'title': '标题3', 'author': '作者3'},
  //     {'title': '标题4', 'author': '作者4'},
  //     {'title': '标题5', 'author': '作者5'},
  // ]
  const [threadContent,setThreadContent] = useState([]); // ['title': '标题1', 'author': '作者1'
  useEffect(()=>{
    async function fetchThreadContent(){
      const resp = await fetch(
        'http://localhost:7000/api/threads'
      )
      const data = await resp.json();
      setThreadContent(data.data);

    }
    fetchThreadContent();
  },[])
  // const threadContent = getThreadContent();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>标题</th>
          <th>作者</th>
        </tr>
      </thead>
      <tbody>
        {threadContent.map((item) => {
          return <Thread title={item.title} author={item.author} />;
        })}
      </tbody>
    </table>
  );
}
