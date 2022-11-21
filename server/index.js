const server = require("./src/server");

server.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

module.exports = server;
