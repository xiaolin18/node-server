const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id || "";

  // 获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    let result = getList(author, keyword);
    return result.then(listData => {
      return new SuccessModel(listData);
    });
  }

  // 获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const result = getDetail(id);
    return result.then(detailData => {
      return new SuccessModel(detailData[0]);
    });
  }

  // 新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    // 返回新建博客插入导数据表里的id
    let blogData = req.body;
    const result = newBlog(blogData);
    return result.then(data => {
      return new SuccessModel(data);
    });
  }

  // 更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    const blogData = req.body;
    const result = updateBlog(id, blogData);
    return result.then(data => {
      if (data) {
        return new SuccessModel(data);
      }
      return new ErrorModel("更新博客失败");
    });
  }

  // 删除博客
  if (method === "POST" && req.path === "/api/blog/delete") {
    const author = "13";
    const result = deleteBlog(id, author);
    return result.then(deleteData => {
      if (deleteData) {
        return new SuccessModel(deleteData);
      }
      return new ErrorModel("删除博客失败");
    });
  }
};

module.exports = handleBlogRouter;