const MockData = {
  orderList: new Array(10).fill({
    title: "iPhone 13",
    num: parseInt(Math.random() * 1000),
    userName: "前端低手",
  }),

  defaultPage: { count: 10, pageSize: 10, pageNum: 1 },

  initialState: {
    page: { count: 10, pageSize: 10, pageNum: 1 },
    tableList: [],
    loading: false,
  },
};

export default MockData;
