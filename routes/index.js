const express = require("express");
const router = express.Router();

router.use("/whether", require("./whether"));
