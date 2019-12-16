// 与server技术有关，不同的功能、不同的场景尽可能拆分开，相互引用
const http = require("http");

const PORT = 8000;
const serverHandle = require("../app");

const server = http.createServer(serverHandle);

server.listen(PORT);