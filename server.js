const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const localIpAddress = require("local-ip-address");
const Logger = require("@ptkdev/logger");
const port = process.env.PORT || 3001; // you can use any port number here; i chose to use 3001
const logger = new Logger();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  logger.info(
    `JSON Server is running - http://localhost:${port} - http://${localIpAddress()}:${port}`
  );
});
