const express = require("express");
const bodyParser = require("body-parser");
const listRoutes = require("./routes/listRoutes");
const db = require("./db.js");

db.connectToDatabase();
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/lists", listRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
