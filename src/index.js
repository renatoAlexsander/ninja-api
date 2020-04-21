const express = require("express");
const routes = require("./routes");
const mongooseConfig = require("./config/mongo");

const app = express();

app.use(express.json());
app.use("/api", routes);

app.use(function (err, req, res, next) {
  console.log(err);
  return res.send({
    error: err._message,
  });
});

app.listen(4000);
