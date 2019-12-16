const getList = (author, keyword) => {
  // 返回假数据，格式是正确的
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1576467905556,
      author: "张三"
    },
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1576467905556,
      author: "张三"
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1576467905556,
      author: "张三"
    },
    {
      id: 3,
      title: "标题C",
      content: "内容C",
      createTime: 1576467905556,
      author: "张三"
    },
    {
      id: 4,
      title: "标题D",
      content: "内容D",
      createTime: 1576467905556,
      author: "小六"
    }
  ]
};
const getDetail = (id) => {
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1576467905556,
    author: "张三"
  }
};
const newBlog = (blogData = {}) => {
  return {
    id: 1,
    info: "新建成功"
  };
};
const updateBlog = (id, blogData) => {
  return true;
};
const deleteBlog = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  deleteBlog
};