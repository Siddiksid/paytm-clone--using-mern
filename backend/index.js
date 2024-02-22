const express = require("express");

const cors = require("cors");
require("dotenv").config();
const mainRouter = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App listening in the port ${port}`);
});
