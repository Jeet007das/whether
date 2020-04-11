const express = require("express");
const router = express.Router();
const controller = require("../controllers/whether");

router.post("/getWhetherInfo", controller.getWhetherInfo);

module.exports = router;
