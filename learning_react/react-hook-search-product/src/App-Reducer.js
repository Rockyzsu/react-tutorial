import { useEffect, useReducer, useState } from "react";
import MockData from "./mock-data";

// use useReducer

function orderReducer(state, action) {
  switch (action.type) {
    case "query":
      return {
        ...state,
        tableList: [],
        loading: true,
      };
    case "success":
      return {
        tableList: action.tableList,
        page: action.page,
        loading: false,
      };

    case "error":
      return {
        loading: false,
        tableList: [],
        page: {
          ...MockData.defaultPage,
        },
      };
  }
}

function App() {
  const [queryString, setQueryString] = useState("");
  const [orderState, dispatch] = useReducer(
    orderReducer,
    MockData.initialState
  );

  const { page, tableList, loading } = orderState;

  const queryPromise = () => {
    return new Promise((resolve, reject) => {
      const timeObj = setTimeout(() => {
        console.log("querystring ", queryString);
        // console.log('table list')
        // console.log(tableList)
        const queryResult = MockData.orderList.filter((item, index) => {
          if (
            item.title.includes(queryString) ||
            item.userName.includes(queryString)
          ) {
            return true;
          } else {
            return false;
          }
        });
        console.log("query result", queryResult);
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

    dispatch({ type: "query" });
    queryPromise({})
      .then((res) => {
        console.log(res);
        dispatch({
          type: "success",
          tableList: res.list,
          page: res.page,
        });
      })
      .catch(() => {
        dispatch({
          type: "error",
        });
      });
  };

  const reSet = () => {
    console.log("reset");
    const resData = MockData.orderList;
    // setTableList(resData);
  };

  useEffect(() => {
    onQuery();
    console.log("init");
  }, []);
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
        <button onClick={onQuery}>搜索</button>
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
        当前分页信息：一共{page.count}; 每页:{page.pageSize}, 当前第：
        {page.pageNum}
      </p>
      <p>当前状态：{loading ? "完成" : "加载"}</p>
    </div>
  );
}

export default App;
