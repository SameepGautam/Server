import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CORSMiddleware } from "./middleware.js";

const PORT = process.env.PORT || 3500;
const server = express();

server.use(cors({ origin: ["*"] }));
server.use(CORSMiddleware);
server.use(cookieParser());
server.use(express.urlencoded());
server.use(express.json());

server.get("/", (req, res) => {
  res.cookie("Authorization", "JPT Auth");
  res.send({ hello: "work" });
});

server.get("/cookie", (req, res) => {
  const header = req.header;
  const headers = req.headers;

  const cookieData = req.cookies;
  res.send({ cookieData, header, headers });
});

server.listen(PORT, () => {
  console.log("SERVER Running at PORT:" + PORT);
});
