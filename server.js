const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const whetherRouter = require("./routes/whether");

//parse data

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow cross orgin request
app.use(cors());

//bind controllers
app.use("/whether", whetherRouter);
app.use("/", (req, res) => {
	console.log("Welcome to whether service.");
	res.send("Welcome to whether service.");
});

// start server
const server = app.listen(4000, async () => {
	console.log("Server listening on port " + 4000);
});
