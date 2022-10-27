const express = require("express");
const cors = require("cors");
const router = require("./routes");

express()
  .use(cors())
  .use(express.json())
  .use(router)
  .listen(8080, () => console.log("It's running boi"));
