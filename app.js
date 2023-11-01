const express = require("express");

const app = express();

app.use(express.urlencoded()); // Parses the body

app.get("/", (req, res) => {
	res.send("Welcome to the home page.");
});

app.get("/destinations", (req, res) => {
	res.send("GET /destinations");
});

app.post("/destinations", (req, res) => {
	res.send("POST /destinations");
});

app.get("/destinations/:id", (req, res) => {
	res.send(`GET /destinations/${req.params.id}`);
});

app.put("/destinations/:id", (req, res) => {
	res.send(`PUT /destinations/${req.params.id}`);
});

app.delete("/destinations/:id", (req, res) => {
	res.send(`DELETE /destinations/${req.params.id}`);
});

app.listen(3000, () => console.log("Server is up."));
