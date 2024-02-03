import { useEffect, useState } from "react";
import MockData from "./mock-data";
 
// work

function App() {
  const [tableList, setTableList] = useState([]);
  const [page, setPage] = useState({...MockData.defaultPage});
  const [queryString, setQueryString] = useState("");
  const [loading,setLoading]=useState(false)

  useEffect(() => {
    const resData = MockData.orderList;
    setTableList(resData);
    const pageInfo = MockData.defaultPage;
    setPage({...pageInfo}) 
    setLoading(true)
  }, []);




  const queryPromise = (queryStr) => {
    return new Promise((resolve, reject) => {
      const timeObj = setTimeout(() => {
        console.log("querystring ", queryString);
        const queryResult = tableList.filter((item, index) => {
          if (
            item.title.includes(queryString) ||
            item.userName.includes(queryString)
          ) {
            return true;
          } else {
            return false;
          }
        });
        console.log(queryResult);
        resolve({
          // 直接返回数据
          list: queryResult,
          page: {
            count: queryResult.length,
            pageNum: MockData.defaultPage.pageNum,
            pageSize: MockData.defaultPage.pageSize,
          },
        });
        clearTimeout(timeObj);
      }, 1000);
    });
  };

  const onQuery = () => {
    console.log("querystring ", queryString);
    const queryResult = tableList.filter((item, index) => {
      if (
        item.title.includes(queryString) ||
        item.userName.includes(queryString)
      ) {
        return true;
      } else {
        return false;
      }
    });
    console.log("now", queryResult);
    setTableList(queryResult);
  };

  const onQueryV2 = () => {
    queryPromise(queryString)
      .then((res) => {
        setTableList([...res.list]);
        setLoading(true);
        setPage({...res.page}) 
      })
      .catch(setTableList([]));
  };
  const reSet = () => {
    console.log("reset");
    const resData = MockData.orderList;
    setTableList(resData);
  };

  return (
    <div className="App">
      <p>
        <input
          placeholder="请输入关键词"
          value={queryString}
          onChange={(e) => {
            setQueryString(e.target.value);
          }}
        />
        <button onClick={onQueryV2}>搜索</button>
        <button on onClick={reSet}>
          重置
        </button>
      </p>
      <p>搜索结果：</p>
      <table>
        <thead>
          <tr>
            <th>编号</th>
            <th>名称</th>
            <th>数量</th>
            <th>用户名称</th>
          </tr>
        </thead>
        <tbody>
          {tableList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{item.title}</td>
                <td>{item.num}</td>
                <td>{item.userName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <p>
        当前分页信息：一共{page.count}; 每页:{page.pageSize}, 当前第：{page.pageNum}
      </p>
      <p>当前状态：{loading?'完成':'加载'}</p>
    </div>
  );
}

export default App;
