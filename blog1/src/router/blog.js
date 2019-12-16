const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require("../controller/blog");
const { SuccessModel, ErrorModel } = require("../model/resModel");

const handleBlogRouter = (req, res) => {
  const method = req.method;
  const id = req.query.id || "";

  // 获取博客列表
  if (method === "GET" && req.path === "/api/blog/list") {
    const author = req.query.author || "";
    const keyword = req.query.keyword || "";
    const listData = getList(author, keyword);
    return new SuccessModel(listData);
  }

  // 获取博客详情
  if (method === "GET" && req.path === "/api/blog/detail") {
    const detailData = getDetail(id);
    return new SuccessModel(detailData);
  }

  // 新建博客
  if (method === "POST" && req.path === "/api/blog/new") {
    let blogData = req.body;
    const data = newBlog(blogData);
    return new SuccessModel(data);
  }

  // 更新博客
  if (method === "POST" && req.path === "/api/blog/update") {
    const blogData = req.body;
    const result = updateBlog(id, blogData);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("更新博客失败");
  }

  // 删除博客
  if (method === "POST" && req.path === "/api/blog/delete") {
    const result = deleteBlog(id);
    if (result) {
      return new SuccessModel();
    }
    return new ErrorModel("删除博客失败");
  }
};

module.exports = handleBlogRouter;