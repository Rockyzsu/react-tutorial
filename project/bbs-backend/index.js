require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const users = require("./api/users");
const threads = require('./api/threads');

mongoose.connect(
  process.env.DB, // db 连接
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("已连接到数据库...");

    const app = express();
    app.use(bodyParser.json());
    app.use(express.static("static"));
    app.use(
      cors({
        // origin: JSON.parse(process.env.CORS),
        origin: "*",
        credentials: true,
      })
    );
    users.apis(app);
    threads.apis(app);

    app.listen(7000);
  }
);
