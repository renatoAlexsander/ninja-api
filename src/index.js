const express = require("express");
const routes = require("./routes");
const mongooseConfig = require("./config/mongo");

const app = express();

app.use(express.json());
app.use("/api", routes);

app.listen(4000);
