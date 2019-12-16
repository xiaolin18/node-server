const login = (username, password) => {
  if (username === "test" && password === "test1234") {
    return true;
  }
  return false;
};

module.exports = {
  login
};