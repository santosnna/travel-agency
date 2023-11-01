const express = require("express");

const routes = require("./routes/index");

require("./db/config");

const app = express();

app.use(express.urlencoded({ extended: true })); // Parses the body
app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server is up."));
