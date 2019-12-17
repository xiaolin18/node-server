const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");

// 获取 cookie 的过期时间
const getCookieExpires = () => {
  const d = new Date();
  d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
  return d.toGMTString();
};

const handleUserRouter = (req, res) => {
  const method = req.method;
  // 登录
  if (method === "GET" && req.path === "/api/user/login") {
    const { username, password } = req.query;
    const result = login(username, password);
    return result.then(loginData => {
      if (loginData.username) {
        const { username, realname } = loginData;
        req.session.username = username;
        req.session.realname = realname;
        return new SuccessModel(loginData);
      }
      return new ErrorModel("登录失败");
    });
  }

  // 登录验证
  if (method === "GET" && req.path === "/api/user/login-test") {
    const { username  } = req.session;
    if (username) {
      return Promise.resolve(new SuccessModel(username));
    }
    return  Promise.resolve(new ErrorModel("尚未登录"));
  }
};

module.exports = handleUserRouter;