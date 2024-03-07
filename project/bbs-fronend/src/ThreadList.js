import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

function Thread({ title, content, author }) {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{content}</td>
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

  const [threadContent, setThreadContent] = useState([]); // ['title': '标题1', 'author': '作者1'
  useEffect(() => {
    async function fetchThreadContent() {
      const resp = await fetch("http://localhost:7000/api/threads");
      console.log(resp.ok);
      console.log(resp.message);
      const resp_data = await resp.json();
      console.log(resp_data.data);
      setThreadContent(resp_data.data);
    }
    fetchThreadContent();
  }, []);
  // const threadContent = getThreadContent();

  return (
    <Table striped hover bordered>
      <thead>
        <tr>
          <th>标题</th>
          <th>内容</th>
          <th>作者</th>
        </tr>
      </thead>

      <tbody>
        {threadContent.map((item, index) => {
          return (
            <Thread
              key={index}
              title={item.title}
              content={item.content}
              author={item.author.username}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
