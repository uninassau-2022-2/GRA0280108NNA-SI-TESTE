import express from "express";
import cors from "cors";
import body_parse from "body-parser";
import path from "./core/routes/path";
import router from "./core/routes/router";

//SWAGGER
import swaggerDocument from "./swagger.json";
import swaggerUi from "swagger-ui-express";
//---------

const server = express();

server.use(cors());
server.use(body_parse.json());

server.use(path.baseUrl, router);
server.use(express.json());

server.use(
  path.swagger,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
  express.urlencoded({
    extended: true,
  })
);

export default server;
